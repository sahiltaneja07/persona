import { Component, EventEmitter, Output } from '@angular/core';

import { FieldsService } from '../fields.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    showShortText = true;
    extraField: any;
    @Output() onItemDragged = new EventEmitter<any>();

    constructor(private fieldsService: FieldsService) {
        this.extraField = this.fieldsService.getFields(3)[0];
    }

    onDragged(effect: string) {
        if (effect === 'none') return;
        this.onItemDragged.emit(this.extraField);
        this.showShortText = false;
    }

}
