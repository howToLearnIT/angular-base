import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Статья про Angular</h1>
      <article> Текст статьи </article>
      <comments />
    </div>
  `,
  imports: [Comments],
})
export class App {}
