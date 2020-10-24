import { Component, EventEmitter, Output } from '@angular/core';

import { ElementsService } from '../elements.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    showShortText = true;
    extraElement: any;
    @Output() onItemDragged = new EventEmitter<any>();

    constructor(private elementsService: ElementsService) {
        this.extraElement = this.elementsService.getElements('extra');
    }

    onDragged(effect: string) {
        if (effect === 'none') return;
        this.onItemDragged.emit(this.extraElement);
        this.showShortText = false;
    }

}
