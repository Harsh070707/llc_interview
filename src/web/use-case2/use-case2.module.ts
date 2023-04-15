import { Module } from '@nestjs/common';
import { UseCase2Service } from './use-case2.service';
import { UseCase2Controller } from './use-case2.controller';
import { UrlEntity } from '../../entity/url.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity])],
  controllers: [UseCase2Controller],
  providers: [UseCase2Service],
})
export class UseCase2Module {}
