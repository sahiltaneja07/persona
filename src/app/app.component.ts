import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    item: any;
    showShortText = true;
    headerName = '';
    personaName = '';
    
    sendToPersona(item: any): void {
        this.item = item;
        this.showShortText = false;
    }

    sendToHeader(name: string): void {
        this.headerName = name;
    }

    sendNameToPersona(name: string): void {
        this.personaName = name;
    }

}
