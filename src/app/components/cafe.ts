import {Component, inject} from '@angular/core';
import { DishService } from '../dish.service';

@Component({
    selector: 'cafe',
    template: `В кафе мы подаем: {{ dishService.getDishes() }}`,
    providers: [DishService],
})
export class Cafe {
    dishService = inject(DishService); // new DishService
}
