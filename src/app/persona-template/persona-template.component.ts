import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { Subscription } from 'rxjs';

import { FieldsService } from '../fields.service';
import { PersonaService } from './persona-template.service';

@Component({
  selector: 'app-persona-template',
  templateUrl: './persona-template.component.html',
  styleUrls: ['./persona-template.component.scss']
})
export class PersonaTemplateComponent implements OnInit, OnDestroy {
    @Input() item: any;
    leftFields = [];
    rightFields = [];
    personaObservable: Subscription;
    persona: any;
    inputChanges = {};
    @Output() onDeleteField = new EventEmitter<any>();

    constructor(private fieldsService: FieldsService, private personaService: PersonaService) {
        this.leftFields = this.fieldsService.getFields(1);
        this.rightFields = this.fieldsService.getFields(2);
    }

    ngOnInit(): void {
        this.getPersonaData();
    }

    getPersonaData(): void {
        this.personaObservable = this.personaService.getPersonaTemplate()
        .subscribe(res => {
            this.persona = res;
        }, err => {
            console.log(err);
        });
    }

    onInputFocus(field: string, val: string): void {
        if (!(field in this.inputChanges)) {
            this.inputChanges[field] = val;
        }
    }

    onInputBlur(field: string, val: string): void {
        val = val.trim();
        if (!val) return;
        if (this.inputChanges[field] === val) return;
        this.inputChanges[field] = val;
        const body = {id: this.persona.id};
        body[field] = val;
        if (field === 'name') {
            this.persona.initials = val.substring(0, 3).toUpperCase();
            body['initials'] = this.persona.initials;
            console.log('PUT REQUEST: ', body);
            return;
        }
        console.log('PUT REQUEST: ', body);
    }

    onDragged(index: number, effect: string, arr: any[], item: any): void {
        if (effect === 'none') return;
        if (item.prev_id) {
            const prev_item = arr.find(x => x.id === item.prev_id);
            prev_item.next_id = item.next_id;
            console.log('UPDATE REQUEST: ', prev_item);
        }
        if (item.next_id) {
            const next_item = arr.find(x => x.id === item.next_id);
            next_item.prev_id = item.prev_id;
            console.log('UPDATE REQUEST: ', next_item);
        }
        arr.splice(index, 1);
    }

    onDrop(event: DndDropEvent, arr: any[]): void {
        if (!event.data) return;
        const columnId = arr[0].column_id;
        arr.splice(event.index, 0, event.data);
        if (arr[event.index-1]) {
            const prev_item = arr[event.index-1];
            prev_item.next_id = arr[event.index].id;
            arr[event.index].prev_id = prev_item.id;
            console.log('UPDATE REQUEST: ', prev_item);
        } else {
            arr[event.index].prev_id = null;
        }
        if (arr[event.index+1]) {
            const next_item = arr[event.index+1];
            next_item.prev_id = arr[event.index].id;
            arr[event.index].next_id = next_item.id;
            console.log('UPDATE REQUEST: ', next_item);
        } else {
            arr[event.index].next_id = null;
        }
        arr[event.index].column_id = columnId;
        console.log('UPDATE REQUEST: ', arr[event.index]);
    }

    deleteField(item: any, arr: any[], index: number): void {
        console.log('DELETE REQUEST: ', {fieldId: item.id, personaId: this.persona.id});
        this.onDragged(index, 'move', arr, item);
        delete this.inputChanges[item.field];
        this.onDeleteField.emit();
    }

    ngOnDestroy(): void {
        if (this.personaObservable) this.personaObservable.unsubscribe();
    }

}
