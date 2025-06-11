import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [contentEditable]="isEditable">Какой-то текст</div> <br/>
    <img 
      [src]="imageSrc" 
      alt="photo" 
      width="100"
    />
  `,
})
export class App {
  isEditable = true;
  imageSrc = 'https://avatars.mds.yandex.net/get-mpic/12012798/2a0000019399d29b50c02d214bc74786d29d/orig'; 
}
