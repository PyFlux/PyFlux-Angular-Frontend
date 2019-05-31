import { Component, OnInit } from '@angular/core';
import { EmailcredentialsService } from '../emailcredentials.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emailcredentials-cu',
  templateUrl: '../pages/emailcredentials-cu.component.html'
})

export class EmailcredentialsCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  emailcredentials: any = {};
  errors: string;
  securities = [{ id: 'None', label: 'None' }, { id: 'STARTTLS', label: 'STARTTLS' }];
  ports = [{ id: '587', label: '587' }, { id: '25', label: '25' }, { id: '465', label: '465' }, { id: '2525', label: '2525' }];

  countries: Array<object> = [];
  states: Array<object> = [];

  constructor(
    private toastr: ToastrService,
    private emailcredentialsService: EmailcredentialsService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      this.emailcredentialsService.postEmailcredential(this.emailcredentials)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/emailcredentials/']);
        }, // success
          error => {
            this.errors = error;
            this.loading = false;
          }
        );
    } else if (this.action_type === 'Edit') {
      this.form_action = 'Save';
      this.emailcredentialsService.updateEmailcredential(this.userId, this.emailcredentials)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/emailcredentials/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }
  ngOnInit() {
    this.emailcredentials.status = '';
    this.emailcredentials.smtp_security = '';
    this.emailcredentials.smtp_port = '';
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.emailcredentialsService.getEmailcredential(this.userId)
        .subscribe(data => {
          this.emailcredentials = data;
        });
    }
  }

}
