import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfilepageService } from '../profilepage.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

// import { DatepickerOptions } from 'ng2-datepicker';
// import * as enLocale from 'date-fns/locale/en';
// import * as date_fns_format from 'date-fns/format';
@Component({
    selector: 'app-profilepage-profile-edit-userprofile',
    templateUrl: '../pages/profile-edit-userprofile.component.html'
})
export class ProfileEditUserProfileComponent implements OnInit {
    userprof_media = '';
    submitted = false;
    userprofileForm: FormGroup;
    profilepic_size = 0;

    // options: DatepickerOptions = {
    //     locale: enLocale
    //   };

    //   get students_marks() {
    //     return this.markentryForm.get('students_marks') as FormArray;
    //   }

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private profileService: ProfilepageService,
        private toastr: ToastrService,
    ) { }

    public getUserProfile() {
        this.profileService.getUserProfile().subscribe((data: any) => {
            this.userprof_media = data.userprofile.media;
            let dob = data.userprofile.dob;
            if (dob) {
                // convert to dd-mm-yyyy format
                dob = moment(dob).format('DD/MM/YYYY');
            }
            this.userprofileForm.patchValue({
                first_name: data.user.first_name,
                middle_name: data.user.middle_name,
                last_name: data.user.last_name,
                email: data.user.email,
                dob: dob,
                personal_mobile_no: data.userprofile.personal_mobile_no,
                media: data.userprofile.media,
                hobbies: data.userprofile.hobbies,
            });
        });
    }

    ngOnInit() {
        this.userprofileForm = this.fb.group({
            first_name: [''],
            middle_name: [''],
            last_name: [''],
            email: ['', [Validators.required, Validators.email]],
            dob: [''],
            personal_mobile_no: ['', [Validators.min(1000000000), Validators.max(9999999999)]],
            media: [null],
            hobbies: [[]],
        });
        this.getUserProfile();
    }
    // convenience getter for easy access to form fields
    get f() { return this.userprofileForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.userprofileForm.invalid) {
            return;
        }
        if (this.profilepic_size > 1000000) {
            this.toastr.error('File size must be less than 1 mb');
            return;
        }

        // can used in case of error
        const dob = this.userprofileForm.value.dob;
        if (dob) {
            this.userprofileForm.patchValue({dob: moment(dob, 'DD/MM/YYYY').format('YYYY-MM-DD')});
        }

        this.profileService.updateUserProfile(this.userprofileForm.value)
            .subscribe((response) => {
                this.toastr.success('User Profile Saved Succesfully!');
                this.userprofileForm.patchValue({dob: dob});
                this.userprof_media = response['media'];
            }, // success
                error => {
                    this.userprofileForm.patchValue({dob: dob});
                    console.log(error.error['non_field_errors']); // widgets.indexOf('profile') != -1
                    if (error.error['non_field_errors'].indexOf('The fields email must make a unique set.') !== -1) {
                        this.toastr.error('Error: Email Taken! Please provide another email.');
                    } else {
                        this.toastr.error(JSON.stringify(error.error));
                    }
                }
            );

        // console.warn(this.userprofileForm.value);
    }
    onFileChange(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.profilepic_size = file.size;
            // console.log(file.size);
            reader.readAsBinaryString(file); // readAsDataURL(file);
            reader.onload = this._handleReaderLoaded.bind(this); // (r) => {
        }
    }
    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.userprofileForm.patchValue({
            media: btoa(binaryString)  // Converting binary string data.
        });
    }
}
