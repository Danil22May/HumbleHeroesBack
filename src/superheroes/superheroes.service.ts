import { Injectable } from '@nestjs/common';
// import { heroes } from './heroes';

@Injectable()
export class SuperHeroesService {
  private heroes = [
    {
      name: 'Moriarti',
      humbleScore: 5,
      superPower: 'EmotionalVision',
    },
    {
      name: 'Sherlock',
      humbleScore: 7,
      superPower: 'UltraIntelligence',
    },
    {
      name: 'Dr. Watson',
      humbleScore: 10,
      superPower: 'EfficientSupport',
    },
  ];

  getAllHeroes() {
    return this.heroes.sort((a, b) => b.humbleScore - a.humbleScore);
  }
  postHeroe(newHeroe) {
    this.heroes.push(newHeroe);
  }
}
