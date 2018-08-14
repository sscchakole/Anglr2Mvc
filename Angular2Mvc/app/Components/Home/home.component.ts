import { Component, OnInit } from "@angular/core";
import { IUser } from '../../Models/user';
import { UserTempService } from '../../Service/usertemp.service';

@Component({
    moduleId: module.id,
    templateUrl: 'app/Components/Home/home.component.html'
})

export class HomeComponent implements OnInit {

    currentUser: IUser;
    //users: User[] = [];
    constructor(private userService: UserTempService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        //this.loadAllUsers();
    }

    //deleteUser(id: number) {
    //    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    //}

    //private loadAllUsers() {
    //    this.userService.getAll().subscribe(users => { this.users = users; });
    //}
}