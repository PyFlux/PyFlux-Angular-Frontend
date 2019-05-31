import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ReligionService } from '../religion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-religion-cu',
  templateUrl: '../pages/religion-cu.component.html'
})

export class ReligionCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  religion: any = {};
  errors: string;



  constructor(
    private toastr: ToastrService,
    private religionService: ReligionService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      // if (this.filestring) this.religion.photo = this.filestring;
      this.religionService.postReligion(this.religion)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/religion/']);
          // this.loading = false;
        }, // success
          error => {
            // this.alertService.error(error);
            this.errors = error;
            this.loading = false;
           
          }
        );
    } else if (this.action_type === 'Edit') {
      this.religionService.updateReligion(this.userId, this.religion)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/religion/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.religion.status = '';
   
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.religionService.getReligion(this.userId)
        .subscribe(data => {
          this.religion = data;
        });
    }
  }

}


