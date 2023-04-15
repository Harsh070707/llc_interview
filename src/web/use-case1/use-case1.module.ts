import { Module } from '@nestjs/common';
import { UseCase1Service } from './use-case1.service';
import { UseCase1Controller } from './use-case1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from '../../entity/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  controllers: [UseCase1Controller],
  providers: [UseCase1Service],
})
export class UseCase1Module {}
