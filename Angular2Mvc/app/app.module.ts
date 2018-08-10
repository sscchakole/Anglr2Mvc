import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/Home/home.component';
import { MenuComponent } from './components/Menu/menu.component';
import { UserComponent } from './components/User/user.component';
import { UserService } from './Service/user.service'
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [
        AppComponent,
        MenuComponent,
        UserComponent,
        HomeComponent
        
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }