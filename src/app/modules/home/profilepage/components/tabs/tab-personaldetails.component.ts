import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profilepage-tab-personaldetails',
  template: `
  <div class="row">
    <div class="col-md-6 col-sm-12" *ngIf="profile?.student">
        <div class="table-responsive">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th style="width:50%">Class</th>
                        <td>{{profile?.student.myclass_name}} {{profile?.student.myclass_division}}</td>
                    </tr>
                    <tr>
                        <th>Admission</th>
                        <td>{{profile?.student.admission_date}}</td>
                    </tr>
                    <tr>
                        <th>Languages</th>
                        <td>{{profile?.student.stud_languages_name}}</td>
                    </tr>
                    <tr>
                        <th>Category</th>
                        <td>{{profile?.student.category_name_student}}</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{{profile?.student.height}}</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>{{profile?.student.weight}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="col-md-6 col-sm-12">
        <div class="table-responsive">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th style="width:50%">DOB</th>
                        <td>{{profile?.userprofile.dob}}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{{profile?.userprofile.gender}}</td>
                    </tr>
                    <tr>
                        <th>BloodGroup</th>
                        <td>{{profile?.userprofile.blood_group}}</td>
                    </tr>
                    <tr>
                        <th>BirthPlace</th>
                        <td>{{profile?.userprofile.birth_place}}</td>
                    </tr>
                    <tr>
                        <th>Religion</th>
                        <td>{{profile?.userprofile.religion}}</td>
                    </tr>
                    <tr>
                        <th>Hobbies</th>
                        <td>{{profile?.userprofile.hobbies}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`
})

export class ProfileTabPersonalDetailsComponent {
  // PersonDetails Tab
  @Input() profile: any;
}
