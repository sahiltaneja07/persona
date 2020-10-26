import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { FieldsService } from '../fields.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges {
    showShortText = true;
    extraField: any;
    @Input() shortTextField: boolean;
    @Output() onItemDragged = new EventEmitter<any>();

    constructor(private fieldsService: FieldsService) {
        this.extraField = this.fieldsService.getFields(3)[0];
    }

    ngOnChanges(): void {
        if (this.shortTextField) this.showShortText = true;
    }

    onDragged(effect: string) {
        if (effect === 'none') return;
        this.onItemDragged.emit(this.extraField);
        this.showShortText = false;
    }

}
