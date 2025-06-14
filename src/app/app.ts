import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{username}}
  `,
  imports: [],
})
export class App {
  username = 'пРоГрАмМиСт ДжУнИоР';
}
