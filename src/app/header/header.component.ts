import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
    @Input() name: string;
    editMode = false;
    nameError = false;
    @Output() onNameSave = new EventEmitter<string>();

    ngOnChanges(): void {
        if (this.name) this.nameError = false;
    }

    saveName(): void {
        this.name = this.name.trim();
        if (!this.name) {
            this.nameError = true;
            return;
        }
        this.nameError = false;
        this.editMode = false;
        this.onNameSave.emit(this.name);
    }

}
