import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/Home/home.component';
import { MenuComponent } from './components/Menu/menu.component';
import { UserComponent } from './components/User/user.component';
//import { UserService } from './Service/user.service'
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

//import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { AlertService } from './Service/alert.service';
import { AuthenticationService } from './Service/authentication.service';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/fack-backend';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/Register/register.component';
import { UserTempService } from './Service/usertemp.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, routing, Ng2Bs3ModalModule],
    declarations: [
        AppComponent,
        MenuComponent,
        UserComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
        
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        //UserService,
        UserTempService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }