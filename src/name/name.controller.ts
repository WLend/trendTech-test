import { Controller, Get, Param, Post } from '@nestjs/common';
import { NameCreateService } from './name-create.service';
import { NameFindService } from './name-find.service';

@Controller('names')
export class NameController {
  constructor(
    private readonly nameCreateService: NameCreateService,
    private readonly nameFindService: NameFindService,
  ) {}

  @Post('create-names')
  async createDocumentsWithoutIndex() {
    await this.nameCreateService.createDocumentsWithoutIndex(1_000_000);
  }

  @Post('create-names-with-index')
  async createDocumentsWithIndex() {
    await this.nameCreateService.createDocumentsWithIndex(1_000_000);
  }

  @Get('find-name/:name')
  async findByName(@Param('name') name: string) {
    console.log(name);
    return this.nameFindService.findByName(name);
  }

  @Get('find-name-with-index/:name')
  async findByNameWithIndex(@Param('name') name: string) {
    console.log(name);
    return this.nameFindService.findByNameWithIndex(name);
  }
}
