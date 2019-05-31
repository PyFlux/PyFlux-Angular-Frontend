import { Component, Input } from '@angular/core';
import { ProfilepageService } from '../profilepage.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilepage-sidebar',
  templateUrl: '../pages/sidebar.component.html'
})

export class ProfileSideBarComponent {
  // To show Profile Picture, Fullname, Username, Email, Phone
  // at the left side of tabs
  @Input() profile: any;

  constructor(
    private profileService: ProfilepageService,
    private toastr: ToastrService,
    private router: Router) { }

  // sendEmail(email) {
  //   // this.profileService.sendEmailVerification()
  //   // .subscribe((response) => {
  //   //   this.toastr.success('Email verification have been send succesfully!');
  //   // });
  //   this.router.navigate(['/home/profilepage/verifyemail/'], {queryParams: { email: email }});
  // }
  // verifyMobile(mobile) {
  //   // console.log(mobile);
  //   // verifymobile
  //   this.router.navigate(['/home/profilepage/verifymobile/'], {queryParams: { mobile: mobile }});
  // }
}
