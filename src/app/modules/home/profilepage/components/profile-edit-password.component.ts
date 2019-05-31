import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfilepageService } from '../profilepage.service';

@Component({
  selector: 'app-profilepage-profile-edit-password',
  templateUrl: '../pages/profile-edit-password.component.html'
})

export class ProfileEditPasswordComponent implements OnInit {
  profile: any = {};
  errors: string;

  constructor(
    private profileService: ProfilepageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onSubmit(): void {
    console.log(this.profile);
    this.profileService.postProfile(this.profile)
      .subscribe((response) => {
        this.router.navigate(['/home/profilepage/']);
      }, // success
        error => {
          // this.alertService.error(error);
          this.errors = error;
        }
      );
  }
}
