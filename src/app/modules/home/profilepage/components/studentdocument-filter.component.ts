import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTableService } from '../../../../shared/datatables/datatable.service';

import { ClassesService } from '../../../academics/classes/classes.service';
import { ProfilepageService } from '../profilepage.service';

@Component({

    selector: 'app-studentdocument-filter',
    templateUrl: '../pages/studentdocument-filter.component.html',
    // https://github.com/ng-select/ng-select/issues/364
    // styles: [`
    // .ng-select .ng-select-container {
    //     min-height: 30px;
    // }
    // .ng-select.ng-select-single .ng-select-container {
    //     height: 30px;
    // }`]
})

export class StudentDocumentFilterComponent implements OnInit,OnDestroy {
    loading = false;
    loading_frm = true;
    categories: Array<object> = [];
    classes: Array<object> = [];
    divisions: Array<object> = [];
    activities: Array<object> = [];
    dtOptions: any = {};
   
    documents:  Array<object> = [];
    filterForm = new FormGroup({
        
        class: new FormControl(''),
        filename: new FormControl(''),
        activity: new FormControl('')
    });
    constructor(
        private dataTableService: DataTableService,
       
        public classService:  ClassesService,
        private profileService: ProfilepageService,
        ) {
    }

    
    

    public getDocuments() {
   
        this.profileService.getStudentDocuments().subscribe((data:  Array<object>) => {
          this.documents  =  data;
          console.log(this.documents);
          
        });
      }
     


    ngOnInit() {
        
        
        this.getDocuments();
       
        
        
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.clearFilter();
    }
    onSubmit() {
        this.dataTableService.filterDatatable(this.filterForm.value);
    }
    clearFilter() {
        this.filterForm.reset();
        this.dataTableService.clearFilter();
    }
}
