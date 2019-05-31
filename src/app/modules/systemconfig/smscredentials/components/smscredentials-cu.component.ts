import { Component, OnInit } from '@angular/core';
import { SmscredentialsService } from '../smscredentials.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-smscredentials-cu',
  templateUrl: '../pages/smscredentials-cu.component.html'
})

export class SmscredentialsCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  smscredentials: any = {};
  errors: string;
  securities = [{ id: 'None', label: 'None' }, { id: 'STARTTLS', label: 'STARTTLS' }];
  ports = [{ id: '587', label: '587' }, { id: '25', label: '25' }, { id: '465', label: '465' }, { id: '2525', label: '2525' }];

  countries: Array<object> = [];
  states: Array<object> = [];

  constructor(
    private toastr: ToastrService,
    private smscredentialsService: SmscredentialsService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      this.smscredentialsService.postSmscredential(this.smscredentials)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/smscredentials/']);
        }, // success
          error => {
            this.errors = error;
            this.loading = false;
          }
        );
    } else if (this.action_type === 'Edit') {
      this.form_action = 'Save';
      this.smscredentialsService.updateSmscredential(this.userId, this.smscredentials)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/smscredentials/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }
  ngOnInit() {
    this.smscredentials.status = '';
    this.smscredentials.smtp_security = '';
    this.smscredentials.smtp_port = '';
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.smscredentialsService.getSmscredential(this.userId)
        .subscribe(data => {
          this.smscredentials = data;
          console.log(this.smscredentials);
        });
    }
  }

}
