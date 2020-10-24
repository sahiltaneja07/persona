import { Injectable } from '@angular/core';

@Injectable()
export class FieldsService {

    getFields(columnId: number): any[] {
        return this.getAllFields().filter(field => field.column_id === columnId);
    }

    private getAllFields(): any[] {
        return [{
            "id": 1,
            "field": "image",
            "field_type": "image",
            "data": "",
            "column_id": 1,
            "prev_id": null,
            "next_id": 2
        }, {
            "id": 2,
            "field": "age",
            "field_type": "short_text",
            "data": "",
            "column_id": 1,
            "prev_id": 1,
            "next_id": 3
        }, {
            "id": 3,
            "field": "gender",
            "field_type": "short_text",
            "data": "",
            "column_id": 1,
            "prev_id": 2,
            "next_id": 4
        }, {
            "id": 4,
            "field": "mood_images",
            "field_type": "image",
            "data": "",
            "column_id": 1,
            "prev_id": 3,
            "next_id": null
        }, {
            "id": 5,
            "field": "occupation",
            "field_type": "short_text",
            "data": "",
            "column_id": 2,
            "prev_id": null,
            "next_id": 6
        }, {
            "id": 6,
            "field": "nationality",
            "field_type": "short_text",
            "data": "",
            "column_id": 2,
            "prev_id": 5,
            "next_id": 7
        }, {
            "id": 7,
            "field": "marital_status",
            "field_type": "short_text",
            "data": "",
            "column_id": 2,
            "prev_id": 6,
            "next_id": 8
        }, {
            "id": 8,
            "field": "quote",
            "field_type": "long_text",
            "data": "",
            "column_id": 2,
            "prev_id": 7,
            "next_id": 9
        }, {
            "id": 9,
            "field": "description",
            "field_type": "long_text",
            "data": "",
            "column_id": 2,
            "prev_id": 8,
            "next_id": null
        }, {
            "id": 10,
            "field": "abc",
            "field_type": "short_text",
            "data": "",
            "column_id": 3,
            "prev_id": null,
            "next_id": null
        }];
    }

}
