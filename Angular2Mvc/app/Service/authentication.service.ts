import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {



    constructor(private http: HttpClient) { }

    register(model: any) {
        return this.http.post<any>('/api/account/register', model)
    }

    login(username: string, password: string) {
        var data = "grant_type=password&username=" + username + "&password=" + password;
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post<any>('/token', data, { headers: headers })
            .map(user => {
                // login successful if there's a jwt token in the response
                console.log('user: ' + user);
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ token:user.access_token, token_type:user.token_type, username:username }));
                }
                
                return user;
            });
    }
 
    logout() {
       
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}