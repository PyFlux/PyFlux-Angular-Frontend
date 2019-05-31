import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfilepageService } from '../../profilepage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profilepage-verify-email',
  template: `
<div class="x_panel" style="min-height:450px">
    <div class="row" style="padding: 20px">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Verify Email</h3>
                </div>
                <div class="panel-body">
                    <div *ngIf="emailverification_send; else elseBlock">
                        <p class="lead">Email verification has been send to <strong>{{email}}</strong></p>
                        <p>Check your email and click activation link to activate your email account</p>
                    </div>
                    <ng-template #elseBlock>
                        <p>Click on the "Send Verification Email" button to send the verification email for
                            <strong> {{email}}</strong></p>
                        <button class="btn btn-success" (click)="sendEmail()">
                            <i class="fa fa-share-square"></i> Send Verification Email!</button>
                    </ng-template>
                        <a class="btn btn-danger" [routerLink]="'/home/profilepage/'">
                            <i class="fa fa-close"></i> Close</a>
                </div>
            </div>
        </div>
    </div>
</div>

`
})

export class VerifyEmailComponent implements OnInit {
    emailverification_send = false;
    email: string;
    constructor(
        private profileService: ProfilepageService,
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService,
        // private router: Router
    ) { }
    ngOnInit() {
        this.email = this.route.snapshot.queryParamMap.get('email');
    }
    sendEmail() {
        this.profileService.sendEmailVerification()
        .subscribe((response) => {
            this.emailverification_send = true;
            this.toastr.success('Email verification have been send succesfully!');
            // this.router.navigate(['/home/profilepage/']);
        });
    }
}


