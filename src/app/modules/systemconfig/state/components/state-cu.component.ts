import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../country/country.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-state-cu',
  templateUrl: '../pages/state-cu.component.html'
})

export class StateCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  state: any = {};
  errors: string;
  countries: Array<object> = [];

  constructor(
    private toastr: ToastrService,
    private countryservice: CountryService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      this.stateService.postState(this.state)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/state/']);
        }, // success
          error => {
            this.errors = error;
            this.loading = false;
          }
        );
    } else if (this.action_type === 'Edit') {
      this.stateService.updateState(this.userId, this.state)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/state/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }
  public getcountries() {
    this.countryservice.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }
  ngOnInit() {
    this.state.status = '';
    this.state.state_country = '';
    this.getcountries();
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.stateService.getState(this.userId)
        .subscribe(data => {
          this.state = data;
        });
    }
  }

}


