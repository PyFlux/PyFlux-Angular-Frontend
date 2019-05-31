import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { NoticeBoardService } from '../../../events/noticeboard/noticeboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../../../systemconfig/organization/organization.service';



@Component({
    selector: 'app-homepage-instituteinfo',
    templateUrl: '../pages/instituteinfo.component.html',
    styleUrls: ['../pages/instituteinfo.component.css']


})
export class InstituteInfoComponent implements OnInit {
    widgets = [];
    widgets_data = {};
    loading = false;
    noticeboards = {};
    organization: any;


    constructor(
        private homeService: HomepageService,
        private organizationservice: OrganizationService,
        private noticeboardservice: NoticeBoardService,
        private route: ActivatedRoute,


    ) { }
    // public func() { 
  
    //     // Original string containing whitespace 
    //     var str = "GeeksforGeeks      "; 
      
    //     // Trimmed string 
    //     var st = str.trimLeft(); 
    //     document.write(st);   
    // } 

    ngOnInit() {
       
        this.loading = true;

        this.organizationservice.getactiveorganization()
            .subscribe(data => {
                this.organization = data[0];
            

            });

    }

}
