import { IsNotEmpty, IsString } from 'class-validator';

export class CityDto {
  @IsString()
  @IsNotEmpty()
  city_name: string;
}
