import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
// import {Globals} from '../globals';
// import { HttpClient} from '@angular/common/http';
import {AclpermissionService} from '../../modules/dashboard/aclpermission/aclpermission.service';
import {ToastrService} from 'ngx-toastr';
import {DataTableService} from '../datatables/datatable.service';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() model_name: string;
  subsubmenu: any;
  filter_trashed: string;
  // subsubmenu_id: string;
  toolbar_loading = false; // used to hide toolbar when loading

  constructor(
    private datatableService: DataTableService,
    private route: ActivatedRoute,
    private router: Router,
    private aclpermissionService: AclpermissionService,
    private toastr: ToastrService,
    private sharedService: SharedService) {
  }

  ngOnInit() {
    this.filter_trashed = this.route.snapshot.queryParamMap.get('filter_trashed');
    const subsubmenu_id = sessionStorage.getItem('subsubmenu_id');
    // https://stackoverflow.com/a/45313296/2351696
    if (subsubmenu_id) {
      this.toolbar_loading = true;
      this.aclpermissionService.getSubSubMenuDetails(subsubmenu_id)
        .subscribe(data => {
          // if user doesn't have the permission to view the menu
          if (data['view']) {
            this.subsubmenu = data;
            this.toolbar_loading = false;
          } else {
            this.router.navigate(['/']);
          }
        });
    } else {
      // if there is no subsubmenu in session Storage
      this.router.navigate(['/']);
    }
  }

  toolbarAction(action) {
    const model_name = this.model_name;
    this.sharedService.toolbarActionShared(action, model_name);
  }
  viewrecord(link) {
    this.sharedService.viewrecordShared(link);
  }
  editrecord(link) {
    this.sharedService.editrecordShared(link);
  }
}
