

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RelationshipService } from '../relationship.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-relationship-cu',
  templateUrl: '../pages/relationship-cu.component.html'
})

export class RelationshipCuComponent implements OnInit {
  relationshipId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  loading_frm = true; // used to hide edit form while fetching
  relationship: any = {};
  errors: string;

  constructor(
    private toastr: ToastrService,
    private relationshipService: RelationshipService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.relationship.status = '';
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.relationshipId = this.route.snapshot.paramMap.get('id');
    if (this.relationshipId) {
      // console.log('edit');
      this.action_type = 'Edit';
      this.form_action = 'Update';

      this.loading_frm = false;
      this.relationshipService.getRelationship(this.relationshipId)
        .subscribe(data => {
          this.loading_frm = true; // show edit form
          // console.log(data);
          this.relationship = data;
        });
    }
  }
  onSubmit(): void {
    this.loading = true;
    if (this.action_type === 'Add') {
      // if (this.filestring) this.student.photo = this.filestring;
      this.relationshipService.postRelationship(this.relationship)
        .subscribe((response) => {
          // console.log('created');
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/relationship/']);
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
      this.relationshipService.updateRelationship(this.relationshipId, this.relationship)
        .subscribe((data) => {
          this.toastr.success('Updated Succesfully!');
          this.router.navigate(['/systemconfig/relationship/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

}
