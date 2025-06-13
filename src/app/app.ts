import {Component} from '@angular/core';
import {Cafe, Kitchen} from './components';

@Component({
  selector: 'app-root',
  template: `
    <kitchen /> <br/><br/>
    <cafe />
  `,
  imports: [Cafe, Kitchen],
})
export class App {

}
