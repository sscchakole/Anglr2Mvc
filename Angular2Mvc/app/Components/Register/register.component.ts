import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserTempService } from '../../Service/usertemp.service';
import { AlertService } from '../../Service/alert.service';


@Component({
    moduleId: module.id,
    templateUrl: 'register.componet.html'
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserTempService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}