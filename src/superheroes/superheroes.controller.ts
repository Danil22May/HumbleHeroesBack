import { Controller, Get, Post } from '@nestjs/common';
import { SuperHeroesService } from './superheroes.service';
@Controller('superheroes')
export class SuperheroesController {
  constructor(private heroesService: SuperHeroesService) {}
  @Get()
  getHeroes() {
    this.heroesService.getAllHeroes(); // returns sorted array of heroes
  }

  @Post()
  postHeroes() {}
}
