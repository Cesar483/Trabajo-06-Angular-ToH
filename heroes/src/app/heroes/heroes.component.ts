import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes
      .sort(function(a,b) {return a.elo - b.elo}
    ));
  }

  add(name: string, elo: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, elo } as unknown as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.heroes.sort(function(a, b) { return a.elo - b.elo; })
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}