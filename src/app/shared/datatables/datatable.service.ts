import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  filter_array: any = {};
  constructor(private  httpClient:  HttpClient,
    private toastr: ToastrService,
    private router: Router) {}

  filterDatatable(filters) {
    this.filter_array = {};
    // check if filters has any empty values
    for (const key of Object.keys(filters)) {
        if (filters[key] && filters[key] !== '') {
          this.filter_array[key] = filters[key];
        }
    }
    if (Object.keys(this.filter_array).length !== 0) {
      $('.datatable').DataTable().ajax.reload();
    } else {
      this.toastr.error('Error..!', 'Please select any filter.');
    }
  }
  clearFilter() {
    this.filter_array = {};
    $('.datatable').DataTable().ajax.reload();
  }
  getDatas(dataTablesParameters) {
    return this.httpClient.post<DataTablesResponse>(
      '/datatable_json/',
      dataTablesParameters, {}
    );
  }
  toolbarAction(params) {
    // Publish, UnPublish, Trash actions
    return this.httpClient.get(
      '/datatable_json/?' + params, // '/dashboard/roles/',
    );
  }
}
