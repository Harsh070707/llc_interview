import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseCase1Module } from './web/use-case1/use-case1.module';
import { UseCase2Module } from './web/use-case2/use-case2.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UseCase1Controller } from './web/use-case1/use-case1.controller';
import { UseCase1Service } from './web/use-case1/use-case1.service';
import { UseCase2Service } from './web/use-case2/use-case2.service';
import { UseCase2Controller } from './web/use-case2/use-case2.controller';
import { CityEntity } from './entity/city.entity';
import { UrlEntity } from './entity/url.entity';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UseCase1Module,
    UseCase2Module,
    CronModule,
    TypeOrmModule.forFeature([CityEntity, UrlEntity]),
  ],

  controllers: [AppController, UseCase1Controller, UseCase2Controller],
  providers: [AppService, UseCase1Service, UseCase2Service],
})
export class AppModule {}
