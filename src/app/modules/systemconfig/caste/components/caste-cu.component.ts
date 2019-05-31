import { Component, OnDestroy, OnInit } from '@angular/core';
import { CasteService } from '../caste.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReligionService } from '../../religion/religion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-caste-cu',
  templateUrl: '../pages/caste-cu.component.html'
})

export class CasteCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  caste: any = {};
  errors: string;

  religions: Array<object> = [];

  constructor(
    private toastr: ToastrService,
    private religionservice: ReligionService,
    private casteService: CasteService,
    private route: ActivatedRoute,
    private router: Router) { }

  public getreligion() {
    this.religionservice.getReligions().subscribe((data: any) => {
      this.religions = data;
    });
  }


  ngOnInit() {
    this.caste.status = '';
    this.caste.religion = '';
    this.getreligion();
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.casteService.getCaste(this.userId)
        .subscribe(data => {
          this.caste = data;
        });
    }
  }

  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      this.casteService.postCaste(this.caste)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/caste/']);
        }, // success
          error => {
            this.errors = error;
            this.loading = false;
          }
        );
    } else if (this.action_type === 'Edit') {
      this.form_action = 'Save';
      this.casteService.updateCaste(this.userId, this.caste)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/caste/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }
}


