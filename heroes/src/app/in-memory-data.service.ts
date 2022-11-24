import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Rakan', elo: 3 },
      { id: 2, name: 'Blitzcrank', elo: 5 },
      { id: 3, name: 'Braum', elo: 7 },
      { id: 4, name: 'Lulu', elo: 9 },
      { id: 5, name: 'Karma', elo: 11 },
      { id: 6, name: 'Nami', elo: 13 },
      { id: 7, name: 'Senna', elo: 17 },
      { id: 8, name: 'Seraphine', elo: 19 },
      { id: 9, name: 'Morgana', elo: 23 },
      { id: 10, name: 'Lux', elo: 29 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}