import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    item: any;
    showShortText = true;
    
    sendToPersona(item: any): void {
        this.item = item;
        this.showShortText = false;
    }
}
