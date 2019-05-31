import {Injectable, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

import {DataTableService} from '../shared/datatables/datatable.service';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  // selected records that can be view.
  view_ids: any;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private datatableService: DataTableService,
  ) {
  }

  // Toolbar Variables
  @Input() model_name: string;
  subsubmenu: any;
  filter_trashed: string;
  toolbar_loading = false;


  getUserProfile() {
    return this.httpClient.get('/usermanagement/getuserprofile/');
  }

  no_checkbox_selected() {
    const sel_length = $('.sub_checkbox:checked').length;
    if (sel_length <= 0) {
      this.toastr.error('Error..!', 'Please select any record.');
      return true;
    } else {
      return false;
    }
  }

  toolbarActionShared(action, model_name) {
    // const sel_length = $('.sub_checkbox:checked').length;
    if (this.no_checkbox_selected()) {
      return false;
    }
    const params = $('#frm_datatable_chkboxes').serialize() + '&model_name=' + model_name + '&action=' + action;
    this.datatableService.toolbarAction(params).subscribe((data: Array<object>) => {
      $('.datatable').DataTable().ajax.reload();
      this.toastr.success('Success..!', 'Record Updated Successfully!', action);
    });
  }
  viewrecordShared(link) {
    if (this.no_checkbox_selected()) {
      return false;
    }
    this.view_ids = $('#frm_datatable_chkboxes').serialize();
    // this.view_ids = [];
    // const that = this;
    // $('input:checkbox:checked').each(function() {
    //   that.view_ids.push($(this).val());
    // });
    this.router.navigate([link + '/view']);

  }

  editrecordShared(link) {
    if (this.no_checkbox_selected()) {
      return false;
    }
    if ($('.sub_checkbox:checked').length > 1) {
      this.toastr.error('Error..!', 'Cannot modify more than 1 record at a time');
      return false;
    }
    const sel_value = $('.sub_checkbox:checked').val();
    this.router.navigate([link + '/edit/', sel_value]);
  }

}
