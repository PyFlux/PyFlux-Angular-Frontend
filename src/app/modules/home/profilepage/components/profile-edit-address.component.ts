import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfilepageService } from '../profilepage.service';
import { CitytownService } from '../../../systemconfig/citytown/citytown.service';
import { StateService } from '../../../systemconfig/state/state.service';
import { DistrictService } from '../../../systemconfig/district/district.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-profilepage-profile-edit-addresss',
    templateUrl: '../pages/profile-edit-addresss.component.html'
})
export class ProfileEditAddressComponent implements OnInit {
    submitted = false;
    states: any = [];
    cities: any = [];
    districts: any = [];
    addressForm = this.fb.group({
        addresses: this.fb.array([]),
        userprofile: ['']
        // temp_address: [''],
        // temp_city: [''],
        // temp_district: [''],
        // temp_state: [''],
        // temp_zip: ['', [Validators.min(100000), Validators.max(999999)]],
        // permanent_address: [''],
        // permanent_city: [''],
        // permanent_district: [''],
        // permanent_state: [''],
        // permanent_zip: [''],
    });
    get addresses() {
      return this.addressForm.get('addresses') as FormArray;
    }

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private profileService: ProfilepageService,
        private citytownservice: CitytownService,
        private stateservice: StateService,
        private districtservice: DistrictService,
        private toastr: ToastrService,
    ) { }

    addAddress() {
        // alert('add stage');
        const fg = this.fb.group({
          address: [''],
          city: [''],
          district: [''],
          state: [''],
          zipcode: ['', [Validators.min(100000), Validators.max(999999)]],
          addresstype: [''],
        });
        
        this.addresses.push(fg);
    }
    removeAddress(i) {
        this.addresses.removeAt(i);
    }
    public getUserProfile() {
        this.profileService.getUserProfile().subscribe((data: any) => {
            // console.log(data.userprofile);
            // console.log(JSON.stringify(data));
            this.addressForm.patchValue({userprofile: data.userprofile.id});
            for (const address of data.userprofile.addresses) {
                this.addresses.push(this.fb.group({
                  address: [address.address],
                  city: [address.city],
                  district: [address.district],
                  state: [address.state],
                  zipcode: [address.zipcode, [Validators.min(100000), Validators.max(999999)]],
                  addresstype: [address.addresstype],
                }));
            }
            // this.addressForm.patchValue({
            //     temp_address: data.userprofile.temp_address,
            //     temp_city: data.userprofile.temp_city,
            //     temp_district: data.userprofile.temp_district,
            //     temp_state: data.userprofile.temp_state,
            //     temp_zip: data.userprofile.temp_zip,

            //     permanent_address: data.userprofile.permanent_address,
            //     permanent_city: data.userprofile.permanent_city,
            //     permanent_district: data.userprofile.permanent_district,
            //     permanent_state: data.userprofile.permanent_state,
            //     permanent_zip: data.userprofile.permanent_zip,
            // });
        });
    }

    public getState() {
        this.stateservice.getStates().subscribe((data: any) => {
        this.states = data;
        });
    }
    public getDistrict() {
        this.districtservice.getDistricts().subscribe((data: any) => {
        this.districts = data;
        });
    }
    public getCity() {
        this.citytownservice.getCitytowns().subscribe((data: any) => {
        this.cities = data;
        });
    }

    ngOnInit() {
        this.getCity();
        this.getDistrict();
        this.getState();
        this.getUserProfile();
    }

    get f() { return this.addressForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.addressForm.invalid) {
            return;
        }
        // TODO: Use EventEmitter with form value
        this.profileService.updateUserAddress(this.addressForm.value)
            .subscribe((response) => {
                this.toastr.success('Address Saved Succesfully!');
                // this.router.navigate(['/profilepage/profile/']);
            }, // success
                error => {
                    // this.alertService.error(error);
                    this.toastr.error(JSON.stringify(error.error));
                    // console.log(error.error);
                }
            );

        // console.warn(this.addressForm.value);
    }
}
