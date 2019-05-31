import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailconfigService } from '../emailconfig.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emailconfig-cu',
  templateUrl: '../pages/emailconfig-cu.component.html'
})

export class EmailconfigCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  emailconfig: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private emailconfigService: EmailconfigService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    console.log(this.action_type);
    // make post
    console.log(this.emailconfig);
    if (this.action_type === 'Add') {
      // if (this.filestring) this.emailconfig.photo = this.filestring;
      this.emailconfigService.postEmailconfig(this.emailconfig)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/emailconfig/']);
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
      this.emailconfigService.updateEmailconfig(this.userId, this.emailconfig)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/emailconfig/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.emailconfig.status = '';
    this.emailconfig.firm_id = '';
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      console.log('edit');
      this.action_type = 'Edit';

      this.form_action = 'Save';
      this.emailconfigService.getEmailconfig(this.userId)
        .subscribe(data => {
          console.log(data);
          this.emailconfig = data;
        });
    }
  }

}


