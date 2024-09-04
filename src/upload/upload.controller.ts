import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { storage } from './storage';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('aaa')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'local-uploads-files',
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('file', file);
  }

  @Post('bbb')
  @UseInterceptors(
    FilesInterceptor('bbb', 3, {
      dest: 'local-uploads-files',
    }),
  )
  uploadFileLimit3(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('file', files);
    console.log('body', body);
  }

  @Post('ccc')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'aaa', maxCount: 1 },
        { name: 'bbb', maxCount: 2 },
      ],
      {
        dest: 'local-uploads-files',
      },
    ),
  )
  uploadFileFields(
    @UploadedFiles()
    files: { aaa?: Express.Multer.File[]; bbb?: Express.Multer.File[] },
    @Body() body,
  ) {
    console.log('file', files);
    console.log('body', body);
  }

  @Post('ddd')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: storage,
      // dest: 'local-uploads-files',
    }),
  )
  uploadAnyFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // @Post()
  // create(@Body() createUploadDto: CreateUploadDto) {
  //   return this.uploadService.create(createUploadDto);
  // }

  // @Get()
  // findAll() {
  //   return this.uploadService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.uploadService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
  //   return this.uploadService.update(+id, updateUploadDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.uploadService.remove(+id);
  // }
}
