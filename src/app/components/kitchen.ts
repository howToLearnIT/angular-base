import {Component, inject} from '@angular/core';
import { DishService } from '../dish.service';

@Component({
    selector: 'kitchen',
    template: `На кухне мы готовим: {{ dishService.getDishes() }}`,
    providers: [DishService],
})
export class Kitchen {
    dishService = inject(DishService);
}
