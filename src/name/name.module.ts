// src/name.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NameController } from './name.controller';
import { NameCreateService } from './name-create.service';
import { NameFindService } from './name-find.service';
import {
  NameWithIndex,
  NameWithIndexSchema,
} from 'src/schemas/name-with-index.schema';
import { Name, NameSchema } from 'src/schemas/name.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NameWithIndex.name, schema: NameWithIndexSchema },
    ]),
    MongooseModule.forFeature([{ name: Name.name, schema: NameSchema }]),
  ],
  controllers: [NameController],
  providers: [NameCreateService, NameFindService],
})
export class NameModule {}
