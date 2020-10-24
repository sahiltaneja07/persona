import { Injectable } from '@angular/core';

@Injectable()
export class ElementsService {

    getElements(type: string): any {
        if (type === 'left') {
            return [{
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
        } else if (type === 'right') {
            return [{
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
        } else if (type === 'extra') {
            return {
                type: 'short_text',
                value: '',
                field: 'abc'
            };
        }
    }

}
