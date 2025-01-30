import { IsInt, IsString, Min, Max } from 'class-validator';

export class HeroDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humbleScore: number;

  @IsString()
  superPower: String;
}
