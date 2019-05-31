import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CountryService } from '../country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-country-cu',
  templateUrl: '../pages/country-cu.component.html'
})

export class CountryCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  country: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    
    // make post
    
    if (this.action_type === 'Add') {
      // if (this.filestring) this.country.photo = this.filestring;
      this.countryService.postCountry(this.country)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/country/']);
          // this.loading = false;
        }, // success
          error => {
            // this.alertService.error(error);
            this.errors = error;
            this.loading = false;
            // console.log(error);
          }
        );
    } else if (this.action_type === 'Edit') {
      this.countryService.updateCountry(this.userId, this.country)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/country/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.country.status = '';
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      console.log('edit');
      this.action_type = 'Edit';
      this.form_action = 'Update';

      this.countryService.getCountry(this.userId)
        .subscribe(data => {
          console.log(data);
          this.country = data;
        });
    }
  }

}


