import { Component } from "@angular/core"

import { UserService } from './service/user.service';

@Component({
    selector: "user-app",
    templateUrl: 'app/app.component.html',
    providers:[UserService]

})

export class AppComponent {

}