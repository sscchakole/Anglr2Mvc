import { Component } from "@angular/core"

import { UserService } from './service/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './Service/alert.service';
import { AuthenticationService } from './Service/authentication.service';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/fack-backend';
import { UserTempService } from './Service/usertemp.service'



@Component({
    moduleId: module.id,
    selector: "user-app",
    templateUrl: 'app.component.html',
    providers: [UserService, UserTempService]

})

export class AppComponent {

}