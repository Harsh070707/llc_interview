import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlEntity } from '../../entity/url.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class UseCase2Service {
  constructor(
    @InjectRepository(UrlEntity)
    private urlRepository: Repository<UrlEntity>,
  ) {}

  async insertUrl(urlDto) {
    const url = await this.urlRepository.save({
      ...urlDto,
    });

    return url;
  }

  async urls() {
    const cities = await this.urlRepository.createQueryBuilder().getMany();
    return cities;
  }
}
