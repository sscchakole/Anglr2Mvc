import { Component } from "@angular/core"
import { IUser } from '../../Models/user';

import { AuthenticationService } from '../../Service/authentication.service';
@Component({
    selector: "app-menu",
    templateUrl: 'app/Components/Menu/menu.component.html'

})

export class MenuComponent {
    currentUser: {
        isAuth: false,
        username: string
    };
    constructor(public authService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('nav user:' + this.currentUser.username)
    }
}