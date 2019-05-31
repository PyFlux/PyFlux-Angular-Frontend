import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DistrictService } from '../district.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-district-cu',
  templateUrl: '../pages/district-cu.component.html'
})

export class DistrictCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  district: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private districtService: DistrictService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      this.districtService.postDistrict(this.district)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/district/']);
        }, // success
          error => {
            this.errors = error;
            this.loading = false;
          }
        );
    } else if (this.action_type === 'Edit') {

      this.districtService.updateDistrict(this.userId, this.district)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/district/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.district.status = '';
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      console.log('edit');
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.districtService.getDistrict(this.userId)
        .subscribe(data => {
          console.log(data);
          this.district = data;
        });
    }
  }

}


