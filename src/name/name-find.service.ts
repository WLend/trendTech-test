import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NameWithIndex } from 'src/schemas/name-with-index.schema';
import { Name } from 'src/schemas/name.schema';

@Injectable()
export class NameFindService {
  constructor(
    @InjectModel(NameWithIndex.name)
    private readonly nameWithIndexModel: Model<NameWithIndex>,
    @InjectModel(Name.name) private readonly nameModel: Model<Name>,
  ) {}

  async findByName(name: string): Promise<Name[]> {
    return this.nameModel.find({ name }).exec();
  }

  async findByNameWithIndex(name: string): Promise<Name[]> {
    return this.nameWithIndexModel.find({ name }).exec();
  }
}
