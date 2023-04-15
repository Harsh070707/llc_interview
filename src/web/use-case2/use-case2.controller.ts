import { Controller, Get, Post, Body } from '@nestjs/common';
import { UseCase2Service } from './use-case2.service';
import { UrlDto } from '../../dto/url.dto';

@Controller('use-case2')
export class UseCase2Controller {
  constructor(private readonly useCase2Service: UseCase2Service) {}

  @Post('url')
  async insertUrl(@Body() urlDto: UrlDto) {
    return await this.useCase2Service.insertUrl(urlDto);
  }

  @Get('urls')
  async urls() {
    return await this.useCase2Service.urls();
  }
}
