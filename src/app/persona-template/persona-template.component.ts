import { Component, Input } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

import { FieldsService } from '../fields.service';

@Component({
  selector: 'app-persona-template',
  templateUrl: './persona-template.component.html',
  styleUrls: ['./persona-template.component.scss']
})
export class PersonaTemplateComponent {
    @Input() item: any;
    leftFields = [];
    rightFields = [];

    constructor(private fieldsService: FieldsService) {
        this.leftFields = this.fieldsService.getFields(1);
        this.rightFields = this.fieldsService.getFields(2);
    }

    onDragged(index: number, effect: string, arr: any[], item: any) {
        if (effect === 'none') return;
        if (item.prev_id) {
            const prev_item = arr.find(x => x.id === item.prev_id);
            prev_item.next_id = item.next_id;
            console.log('update request', prev_item);
        }
        if (item.next_id) {
            const next_item = arr.find(x => x.id === item.next_id);
            next_item.prev_id = item.prev_id;
            console.log('update request', next_item);
        }
        arr.splice(index, 1);
    }

    onDrop(event: DndDropEvent, arr: any[]) {
        if (!event.data) return;
        const columnId = arr[0].column_id;
        arr.splice(event.index, 0, event.data);
        if (arr[event.index-1]) {
            const prev_item = arr[event.index-1];
            prev_item.next_id = arr[event.index].id;
            arr[event.index].prev_id = prev_item.id;
            console.log('update request', prev_item);
        } else {
            arr[event.index].prev_id = null;
        }
        if (arr[event.index+1]) {
            const next_item = arr[event.index+1];
            next_item.prev_id = arr[event.index].id;
            arr[event.index].next_id = next_item.id;
            console.log('update request', next_item);
        } else {
            arr[event.index].next_id = null;
        }
        arr[event.index].column_id = columnId;
        console.log('update request', arr[event.index]);
    }

}
