import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilepage-verify-topbar',
  template: `
<div class="alert alert-danger" *ngIf="!profile?.userprofile.is_verified_mobile || !profile?.userprofile.is_verified_email" role="alert">
    <p *ngIf="!profile?.userprofile.is_verified_email">
        <strong>Email not verified.  </strong>
        <a class="btn btn-default btn-xs" (click)="sendEmail(profile?.email)">Verify Email</a>
    </p>

    <p *ngIf="!profile?.userprofile.is_verified_mobile && profile?.userprofile.personal_mobile_no" role="alert">
        <strong>Mobile Number not verified.  </strong>
        <a class="btn btn-default btn-xs"
          (click)="verifyMobile(profile?.userprofile.id, profile?.userprofile.personal_mobile_no)">Verify Mobile</a>
    </p>
</div>
`
})

export class VerifyTopBarComponent {
  @Input() profile: any;

  constructor(
    private toastr: ToastrService,
    private router: Router) { }

  sendEmail(email) {
    this.router.navigate(['/home/profilepage/verifyemail/'], {queryParams: { email: email }});
  }
  verifyMobile(id, mobile) {
    this.router.navigate(['/home/profilepage/verifymobile/'], {queryParams: { userprofileid: id, mobile: mobile }});
  }
}


