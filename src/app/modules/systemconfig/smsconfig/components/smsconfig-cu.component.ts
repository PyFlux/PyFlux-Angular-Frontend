import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SmsconfigService } from '../smsconfig.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-smsconfig-cu',
  templateUrl: '../pages/smsconfig-cu.component.html'
})

export class SmsconfigCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  smsconfig: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private smsconfigService: SmsconfigService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    console.log(this.action_type);
    // make post
    console.log(this.smsconfig);
    if (this.action_type === 'Add') {
      // if (this.filestring) this.smsconfig.photo = this.filestring;
      this.smsconfigService.postSmsconfig(this.smsconfig)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/smsconfig/']);
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
      this.smsconfigService.updateSmsconfig(this.userId, this.smsconfig)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/smsconfig/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.smsconfig.status = '';
    this.smsconfig.firm_id = '';
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      console.log('edit');
      this.action_type = 'Edit';

      this.form_action = 'Update';
      this.smsconfigService.getSmsconfig(this.userId)
        .subscribe(data => {
          console.log(data);
          this.smsconfig = data;
        });
    }
  }

}


