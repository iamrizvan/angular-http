import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable()
export class UserService
{
    constructor(private _http: HttpClient){}
    getUsers() : Observable<User[]>{
        return this._http.get<User[]>("http://localhost:8080/mobile-app-ws/users")
        .pipe(result => result);
    }   
}
