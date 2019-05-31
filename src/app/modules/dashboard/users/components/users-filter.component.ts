import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTableService } from '../../../../shared/datatables/datatable.service';
@Component({
    selector: 'app-users-filter',
    templateUrl: '../pages/users-filter.component.html'
})

export class UsersFilterComponent implements OnDestroy {

    filterForm = new FormGroup({
        status: new FormControl(''),
    });
    constructor(
        private dataTableService: DataTableService) { }

    onSubmit() {
        this.dataTableService.filterDatatable(this.filterForm.value);
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.clearFilter();
    }
    clearFilter() {
        this.filterForm.reset();
        this.dataTableService.clearFilter();
    }
}
