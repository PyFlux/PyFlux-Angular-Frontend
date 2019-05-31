import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfilepageService } from '../../profilepage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profilepage-verify-mobile',
  template: `
  <div class="x_panel" style="min-height:450px">
    <div class="row" style="padding: 20px">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Verify Mobile Number</h3>
                </div>
                <div class="panel-body">
                    <p> Verification code will be sent to your registered mobile number:
                        <strong>{{verifymobile.mobile | slice:0:5}} {{verifymobile.mobile | slice:5:10}}</strong></p>
                    <!-- <h4> Mobile Number: <strong>{{verifymobile.mobile}}</strong></h4> -->
                    <div class="well well-sm">
                        <p><strong>Note: </strong>If DND activated on your mobile, SMS will not be recieve. In that
                        case deactivate DND & try again.</p>
                    </div>
                    <form *ngIf="otp_send" name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm">
                        <div class="row">
                            <div class="col-md-6">
                                <input class="form-control" name="mobile"
                                    [(ngModel)]="verifymobile.mobile" type="hidden"/>

                                <div class="form-group" [ngClass]="{ 'has-error': f.submitted && otp.invalid }">
                                    <input type="text" class="form-control" placeholder="Please enter the OTP"
                                        name="otp" #otp="ngModel" [(ngModel)]="verifymobile.otp" pattern="^[0-9]{0,10}$"
                                        minlength="6" maxlength="6" required />
                                    <span *ngIf="f.submitted && otp.invalid" class="help-block">
                                        <span *ngIf="otp.errors.required">OTP is required</span>
                                        <span *ngIf="otp.errors.minlength">Must contain 6 digits</span>
                                        <span *ngIf="otp.errors.pattern">Must contains only numbers</span>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-success">Verify!</button>
                            </div>
                        </div>
                        <hr>
                    </form>
                    <div class="row">
                        <div class="col-md-6 col-md-offset-6">
                            <a class="btn btn-danger pull-right" [routerLink]="'/home/profilepage/'">
                                <i class="fa fa-close"></i> Cancel</a>
                            <button class="btn btn-primary pull-right" type="button" (click)="sentOTP($event)">
                                <i class="fa fa-share-square"></i> Sent OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`
})

export class VerifyMobileComponent implements OnInit {
    // user_type = localStorage.getItem('user_type');
    otp_send = false;
    mobile: string;
    verifymobile: any = {};
    constructor(
        private profileService: ProfilepageService,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private router: Router) { }
    ngOnInit() {
        // this.otp_send = false;
        this.verifymobile.mobile = this.route.snapshot.queryParamMap.get('mobile');
        this.verifymobile.userprofileid = this.route.snapshot.queryParamMap.get('userprofileid');
        // this.sendOTP(this.verifymobile.mobile);
    }
    onSubmit(): void {
        // console.log(this.profile);
        this.profileService.verifyMobile(this.verifymobile)
        .subscribe((response) => {
            this.toastr.success(`Mobile Number ${this.verifymobile.mobile} verified succesfully!`);
            this.router.navigate(['/home/profilepage/']);
        }, // success
        error => {
            this.toastr.error(error.error.code);
        }
        );
    }
    sentOTP(event) {
        const mobile = this.verifymobile.mobile;
        this.otp_send = true;
        event.srcElement.innerHTML = 'Resent OTP';
        // if (event.srcElement.innerHTML === 'Sent OTP' ) {
        //     event.srcElement.innerHTML = 'Resent OTP';
        // }
        this.profileService.sendMobileVerification(mobile)
        .subscribe((response) => {
            this.toastr.success(`OTP have been send to ${mobile} succesfully!`);
        }, // success
        error => {
            this.toastr.error(JSON.stringify(error.error));
        });
    }
}


