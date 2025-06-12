import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div style="position: relative; height:300px;">
        <img [ngSrc]="background" fill alt="Фоновая картинка" priority/>
    </div>

    <p>Имя: {{ username }}</p>
    <p>Предпочительный фреймворк:</p>
    <ul>
      <li>
        Статичная картинка: <br/>
        <img 
          ngSrc="/assets/logo.svg" 
          alt="Логотип Ангуляра" 
          width="32" 
          height="32"
        />
      </li>
      <li>
        Динамическая картинка: <br/>
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class App {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Логотип Ангуляра';
  username = 'youngTech';
  background = 'https://avatars.mds.yandex.net/i?id=966354b41d1bdca216b4705e31a0f2ae_l-10752166-images-thumbs&n=13'
}
