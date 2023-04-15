import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { UseCase1Service } from './use-case1.service';
import { CityDto } from '../../dto/city.dto';

@Controller('use-case1')
export class UseCase1Controller {
  constructor(private readonly useCase1Service: UseCase1Service) {}

  @Post('insert_city')
  async insertCity(@Body() cityDto: CityDto) {
    return await this.useCase1Service.insertCity(cityDto);
  }

  @Patch('update_city')
  async patchCity(
    @Body('cityOldName') cityOldName: string,
    @Body('cityNewName') cityNewName: string,
  ) {
    return await this.useCase1Service.patchCity(cityOldName, cityNewName);
  }

  @Get('cities')
  async cities() {
    return await this.useCase1Service.cities();
  }
}
