import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Имя: {{ username }}</p>
    <p>Предпочительный фреймворк:</p>
    <ul>
      <li>
        Статичная картинка: <br/>
        <img src="/assets/logo.svg" alt="Логотип Ангуляра" width="32"
        />
      </li>
      <li>
        Динамическая картинка: <br/>
        <img [src]="logoUrl" [alt]="logoAlt" width="32" />
      </li>
    </ul>
  `,
})
export class App {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Логотип Ангуляра';
  username = 'youngTech';
}
