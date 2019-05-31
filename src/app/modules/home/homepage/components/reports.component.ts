import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-homepage-reports',
    templateUrl: '../pages/reports.component.html'
})
export class ReportComponent implements OnInit {
    widgets = [];
    widgets_data = {};
    constructor(private homeService: HomepageService) { }

    ngOnInit() {
        this.getReportWidgets();
    }
    public getReportWidgets() {
        this.homeService.getReportWidgets().subscribe((data: Array<object>) => {
            // this.loading = false;
           
            this.widgets = data['widgets'];
            
            for (const w of this.widgets) {
                this.widgets_data[w] = data[w];
                
            }
            // console.log(this.widgets_data);
        });
    }
}
