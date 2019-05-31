import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../organization.service';
import { ToastrService } from 'ngx-toastr';
import { tinyMceSettings } from '../../../../shared/tinymce';

@Component({
  selector: 'app-organization-cu',
  templateUrl: '../pages/organization-cu.component.html'
})
export class OrganizationCuComponent implements OnInit {

  userId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  organization: any = {};
  errors: string;
  selectedFile: File;
  filestring: string;
  selectedFile2: File;
  filestring2: string;
  url = '';
  tinymcesettings = tinyMceSettings;

  constructor(
    private toastr: ToastrService,
    private organizationsService: OrganizationService,
    private route: ActivatedRoute,
    private router: Router) { }

  onFileChanged(event) {
    // see --> https://www.codingforentrepreneurs.com/blog/file-upload-with-angular/
    // https://academind.com/learn/angular/snippets/angular-image-upload-made-easy/
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.selectedFile);
    
  }
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.

  }
  onFileChangedFunction(event) {
    // see --> https://www.codingforentrepreneurs.com/blog/file-upload-with-angular/
    // https://academind.com/learn/angular/snippets/angular-image-upload-made-easy/
    this.selectedFile2 = event.target.files[0];
    const reader = new FileReader();
    const reader2 = new FileReader();
    reader.onload = this._handleReaderLoadedFunction.bind(this);
    reader2.onload = this._handleReader2LoadedFunction.bind(this);
    reader.readAsBinaryString(this.selectedFile2);
    reader2.readAsDataURL(this.selectedFile2);
   
  }
  _handleReaderLoadedFunction(readerEvt) {
    const binaryString2 = readerEvt.target.result;
    this.filestring2 = btoa(binaryString2);
    // Converting binary string data.
  }
  _handleReader2LoadedFunction(reader2Evt) {
    const binaryString2 = reader2Evt.target.result;
    this.url = binaryString2;
    // Converting binary string data.
  }

  onSubmit(): void {
    this.loading = true;
    
    // make post
    if (this.filestring) {
      this.organization.org_logo = this.filestring;
    }
    if (this.filestring2) {
      this.organization.institute_image = this.filestring2;

    }

   
    if (this.action_type === 'Add') {
      // if (this.filestring) this.organization.photo = this.filestring;
      this.organizationsService.postOrganization(this.organization)
        .subscribe((response) => {
          this.toastr.success('Saved Succesfully!');
          this.router.navigate(['/systemconfig/organization/']);
          // this.loading = false;
        }, // success
          error => {
            // this.alertService.error(error);
            this.errors = error;
            this.loading = false;
           
          }
        );
    } else if (this.action_type === 'Edit') {
      this.organizationsService.updateOrganization(this.userId, this.organization)
        .subscribe((data) => {
          this.toastr.success('Updated Successfully!');
          this.router.navigate(['/systemconfig/organization/']);
        },
          error => {
            this.errors = error;
            this.loading = false;
          });
    }
  }

  ngOnInit() {
    this.organization.status = '';
    
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';

      this.organizationsService.getOrganization(this.userId)
        .subscribe(data => {
          this.organization = data;
        });
    }
  }

}

