import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from '../../entity/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UseCase1Service {
  constructor(
    @InjectRepository(CityEntity)
    private cityRepository: Repository<CityEntity>,
  ) {}

  async insertCity(cityDto) {
    const city = await this.cityRepository.save({
      ...cityDto,
    });

    return city;
  }

  async patchCity(cityOldName: string, cityNewName: string) {
    const updatedName = await this.cityRepository.update(
      { city_name: cityOldName },
      { city_name: cityNewName },
    );
    return updatedName;
  }

  async cities() {
    const cities = await this.cityRepository
      .createQueryBuilder('city')
      .select('city.city_name as city_name')
      .distinct(true)
      .getRawMany();
    return cities;
  }
}
