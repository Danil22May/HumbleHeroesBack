import { Injectable } from '@nestjs/common';
// import { heroes } from './heroes';

@Injectable()
export class SuperHeroesService {
  // it would be better to save this in a real database or separate this array in
  // individual file and add incrementing "id" functionality
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
