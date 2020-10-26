import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { HttpService } from '../http.service';

@Injectable()
export class PersonaService {
    private readonly personaUrl = 'personas/personaId';

    constructor(private httpService: HttpService) {}

    getPersonaTemplate(): Observable<any> {
        const url = `${environment.serverUrl}/${this.personaUrl}`;
        return this.httpService.getRequest(url);
    }

}
