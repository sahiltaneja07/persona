import { Component, Input } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-persona-template',
  templateUrl: './persona-template.component.html',
  styleUrls: ['./persona-template.component.scss']
})
export class PersonaTemplateComponent {
    @Input() item: any;
    leftElements = [];
    rightElements = [];

    constructor(private elementsService: ElementsService) {
        this.leftElements = this.elementsService.getElements('left');
        this.rightElements = this.elementsService.getElements('right');
    }

    onDragged(index: number, effect: string, arr?: any[]) {
        if (effect === 'none') return;
        if (!arr) return;
        arr.splice(index, 1);
    }

    onDrop(event: DndDropEvent, arr: any[]) {
        if (!event.data) return;
        arr.splice(event.index, 0, event.data);
    }

}
