import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NationalityService } from '../nationality.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nationality-cu',
  templateUrl: '../pages/nationality-cu.component.html'
})

export class NationalityCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  nationality: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private nationalityService: NationalityService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      // if (this.filestring) this.nationality.photo = this.filestring;
      this.nationalityService.postNationality(this.nationality)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/nationality/']);
          // this.loading = false;
        }, // success
          error => {
            // this.alertService.error(error);
            this.errors = error;
            this.loading = false;
           
          }
        );
    } else if (this.action_type === 'Edit') {

      this.nationalityService.updateNationality(this.userId, this.nationality)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/nationality/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.nationality.status = '';
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.nationalityService.getNationality(this.userId)
        .subscribe(data => {
          this.nationality = data;
        });
    }
  }

}


