import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-playground';
  heroes = [
      { name: 'Batman' },
      { name: 'Joker' }
    ];
  names: string[];

  constructor() {
    this.names = this.heroes
      .map(({ name }) => name);
  }
}
