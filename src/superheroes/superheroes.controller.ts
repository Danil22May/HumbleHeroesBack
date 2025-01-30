import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperHeroesService } from './superheroes.service';
import { HeroDto } from './heroDto';
@Controller('superheroes')
export class SuperheroesController {
  constructor(private heroesService: SuperHeroesService) {}
  @Get()
  getHeroes() {
    return this.heroesService.getAllHeroes(); // returns sorted array of heroes
  }

  @Post()
  postHeroes(@Body() heroDto: HeroDto) {
    this.heroesService.postHeroe(heroDto); // i would like my teammates to add Error handling and add corresponding response status
    return { message: 'Posted Successfully!!' };
  }
}
