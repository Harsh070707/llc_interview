import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from '../entity/url.entity';
import { ScheduleModule as Cron } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity]), Cron.forRoot()],
  providers: [CronService],
})
export class CronModule {}
