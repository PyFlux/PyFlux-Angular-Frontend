import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HobbiesService } from '../../hobbies/hobbies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hobbies-cu',
  templateUrl: '../pages/hobbies-cu.component.html'
})

export class HobbiesCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  hobbies: any = {};
  errors: string;

  countries: Array<object> = [];
  states: Array<object> = [];

  constructor(
    private toastr: ToastrService,
    private hobbiesService: HobbiesService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      this.hobbiesService.postHobby(this.hobbies)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/hobbies/']);
        }, // success
          error => {
            this.errors = error;
            this.loading = false;
          }
        );
    } else if (this.action_type === 'Edit') {
      this.form_action = 'Save';
      this.hobbiesService.updateHobby(this.userId, this.hobbies)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/hobbies/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }
  ngOnInit() {
    this.hobbies.status = '';
    this.hobbies.city_state = '';
    this.hobbies.city_country = '';
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.hobbiesService.getHobby(this.userId)
        .subscribe(data => {
          this.hobbies = data;
        });
    }
  }

}
