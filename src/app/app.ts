import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <label>
        Имя
        <input type="text" formControlName="name" />
      </label>
  
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>

      <button type="submit">Отправить</button>
    </form>
  `,
  imports: [],
})
export class App {}
