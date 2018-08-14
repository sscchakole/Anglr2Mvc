import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../Models/user';

@Injectable()
export class UserTempService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<IUser[]>('/api/userapi');
    }

    getById(id: number) {
        return this.http.get('/api/userapi/' + id);
    }

    create(user: IUser) {
        return this.http.post('/api/userapi/', user);
    }

    update(user: IUser) {
        return this.http.put('/api/userapi/' + user.Id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/userapi/' + id);
    }
}