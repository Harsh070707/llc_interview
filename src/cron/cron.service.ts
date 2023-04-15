import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlEntity } from '../entity/url.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  constructor(
    @InjectRepository(UrlEntity)
    private urlRepository: Repository<UrlEntity>,
  ) {}

  @Cron('*/2 * * * *')
  async urlCheck() {
    console.log('---cron---');

    const url = await this.urlRepository.find();

    for await (const websiteUrl of url) {
      try {
        const urlRegex = /^http(s)?:\/\//i;

        const hasProtocol = urlRegex.test(websiteUrl.url_path);

        const formattedUrl = hasProtocol
          ? websiteUrl.url_path
          : `https://${websiteUrl.url_path}`;

        const response = await axios.get(formattedUrl);

        if (response.status !== 200) {
          websiteUrl.status = 0;
          await this.urlRepository.save(websiteUrl);
        } else {
          websiteUrl.status = 1;
          await this.urlRepository.save(websiteUrl);
        }
      } catch (error) {
        websiteUrl.status = 0;
        await this.urlRepository.save(websiteUrl);
      }
    }

    return { status: 'Websites checked' };
  }
}
