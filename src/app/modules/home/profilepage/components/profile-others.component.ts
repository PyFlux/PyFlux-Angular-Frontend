import { Component, OnInit } from '@angular/core';

import { ProfilepageService } from '../profilepage.service';

@Component({
  selector: 'app-profilepage-other',
  templateUrl: '../pages/profile-others.component.html'
})

export class ProfileOthersComponent implements OnInit {
    profile: any;

    constructor(private profileService: ProfilepageService) { }

    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.profileService.getProfile().subscribe((data: Array<object>) => {
          this.profile = data;
        });
    }

}
