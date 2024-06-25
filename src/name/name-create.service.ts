import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { NameWithIndex } from 'src/schemas/name-with-index.schema';
import { Name } from 'src/schemas/name.schema';

@Injectable()
export class NameCreateService {
  constructor(
    @InjectModel(NameWithIndex.name)
    private readonly nameWithIndexModel: Model<NameWithIndex>,
    @InjectModel(Name.name) private readonly nameModel: Model<Name>,
  ) {}

  private async createDocumentsInBatch(
    model: Model<Name | NameWithIndex>,
    count: number,
    batchSize: number,
  ): Promise<void> {
    for (let i = 0; i < count; i += batchSize) {
      const batch = [];
      for (let j = 0; j < batchSize && i + j < count; j++) {
        const randomName: string = faker.person.firstName();
        batch.push({ name: randomName });
      }
      await model.insertMany(batch);
    }
  }

  async createDocumentsWithIndex(count: number): Promise<void> {
    const batchSize = 1000;
    await this.createDocumentsInBatch(
      this.nameWithIndexModel,
      count,
      batchSize,
    );
  }

  async createDocumentsWithoutIndex(count: number): Promise<void> {
    const batchSize = 1000;
    await this.createDocumentsInBatch(this.nameModel, count, batchSize);
  }
}
