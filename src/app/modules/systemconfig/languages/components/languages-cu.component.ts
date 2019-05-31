import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LanguagesService } from '../languages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-languages-cu',
  templateUrl: '../pages/languages-cu.component.html'
})

export class LanguagesCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  languages: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private languagesService: LanguagesService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      // if (this.filestring) this.languages.photo = this.filestring;
      this.languagesService.postLanguage(this.languages)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/languages/']);
          // this.loading = false;
        }, // success
          error => {
            // this.alertService.error(error);
            this.errors = error;
            this.loading = false;
           
          }
        );
    } else if (this.action_type === 'Edit') {

      this.languagesService.updateLanguage(this.userId, this.languages)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/languages/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.languages.status = '';
  
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.languagesService.getLanguage(this.userId)
        .subscribe(data => {
          this.languages = data;
        });
    }
  }

}


