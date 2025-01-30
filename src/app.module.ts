import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroesController } from './superheroes/superheroes.controller';
import { SuperHeroesService } from './superheroes/superheroes.service';

@Module({
  imports: [],
  controllers: [AppController, SuperheroesController],
  providers: [AppService, SuperHeroesService],
})
export class AppModule {}
