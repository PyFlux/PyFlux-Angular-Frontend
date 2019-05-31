import { Component, OnDestroy, OnInit } from '@angular/core';
import { CitytownService } from '../citytown.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../country/country.service';
import { StateService } from '../../state/state.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-citytown-cu',
  templateUrl: '../pages/citytown-cu.component.html'
})

export class CitytownCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  citytown: any = {};
  errors: string;

  countries: Array<object> = [];
  states: Array<object> = [];

  constructor(
    private toastr: ToastrService,
    private countryservice: CountryService,
    private stateservice: StateService,
    private citytownService: CitytownService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
   
    if (this.action_type === 'Add') {
      // if (this.filestring) this.citytown.photo = this.filestring;
      this.citytownService.postCitytown(this.citytown)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/citytown/']);
          // this.loading = false;
        }, // success
          error => {
            // this.alertService.error(error);
            this.errors = error;
            this.loading = false;
          
          }
        );
    } else if (this.action_type === 'Edit') {
      this.form_action = 'Save';
      this.citytownService.updateCitytown(this.userId, this.citytown)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/citytown/']);
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
  public getStates() {
    this.stateservice.getStates().subscribe((data: any) => {
      this.states = data;
    });
  }
  ngOnInit() {
    this.citytown.status = '';
    this.citytown.city_state = '';
    this.citytown.city_country = '';
    this.getcountries();
    this.getStates();
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.citytownService.getCitytown(this.userId)
        .subscribe(data => {
          this.citytown = data;
        });
    }
  }

}


