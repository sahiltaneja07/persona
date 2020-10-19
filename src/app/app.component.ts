import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    draggable = {
        data: "myDragData",
        effectAllowed: "all",
        handle: true
    };
    extraElement = {
        type: 'short_text',
        value: '',
        field: 'abc'
    };
    showShortText = true;
    leftElements = [{
        type: 'image',
        value: '',
        field: 'image'
    }, {
        type: 'short_text',
        value: '',
        field: 'age'
    }, {
        type: 'short_text',
        value: '',
        field: 'gender'
    }, {
        type: 'image',
        value: '',
        field: 'mood_images'
    }];
    rightElements = [{
        type: 'short_text',
        value: '',
        field: 'occupation'
    }, {
        type: 'short_text',
        value: '',
        field: 'nationality'
    }, {
        type: 'short_text',
        value: '',
        field: 'marital_status'
    }, {
        type: 'long_text',
        value: '',
        field: 'quote'
    }, {
        type: 'long_text',
        value: '',
        field: 'description'
    }];

    onDragged(index: number, effect: string, arr?: any[]) {
        // console.log(index, effect);
        if (effect === 'move') {
            if (arr) {
                arr.splice(index, 1);
            } else {
                this.showShortText = false;
            }
        }
    }

    onDrop(event: DndDropEvent, arr: any[]) {
        // console.log("dropped", event.data, event.index, arr);
        arr.splice(event.index, 0, event.data);
    }
}
