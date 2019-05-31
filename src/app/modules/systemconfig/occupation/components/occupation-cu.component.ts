

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OccupationService } from '../occupation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-occupation-cu',
  templateUrl: '../pages/occupation-cu.component.html'
})

export class OccupationCuComponent implements OnInit {
  occupationId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  loading_frm = true; // used to hide edit form while fetching
  occupation: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private occupationService: OccupationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.occupation.status = '';
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.occupationId = this.route.snapshot.paramMap.get('id');
    if (this.occupationId) {
      // console.log('edit');
      this.action_type = 'Edit';
      this.loading_frm = false;
      this.form_action = 'Update';

      this.occupationService.getOccupation(this.occupationId)
        .subscribe(data => {
          this.loading_frm = true; // show edit form
          // console.log(data);
          this.occupation = data;
        });
    }
  }
  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      // if (this.filestring) this.student.photo = this.filestring;
      this.occupationService.postOccupation(this.occupation)
        .subscribe((response) => {
          // console.log('created');
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/occupation/']);
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

      this.occupationService.updateOccupation(this.occupationId, this.occupation)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/occupation/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

}
