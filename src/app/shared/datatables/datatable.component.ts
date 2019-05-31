import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableService } from './datatable.service';
// import { GlobalService } from '../global.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})

export class DataTableComponent implements OnInit {
  @Input() model_name: string;
  @Input() fields;
  dtOptions: any = {};
  filter_trashed: string;

  constructor(
    private datatableService: DataTableService,
    // private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.filter_trashed = this.route.snapshot.queryParamMap.get('filter_trashed');
    // this.route.queryParamMap.subscribe(params => {
    //   this.orderObj = {...params.keys, ...params};
    // });
    const that = this;

    const buttons = ['pageLength', 'copy', 'csv', 'print',
      {
        text: '<i class="fa fa-trash"></i> Trashed',
        action: function (e, dt, node, config) {
          // that.router.navigate([that.router.url], {queryParams: { filter: 'trash' }});
          that.redirectTo({filter_trashed: '1'});
          // that.initDatatable(buttons);
        }
      }
    ];

    if (this.filter_trashed === '1') {
      buttons[4] = {
        text: 'Clear Filter',
        action: function (e, dt, node, config) {
          // dt.ajax.reload();
          that.redirectTo('');
        }
      };
    }
    this.initDatatable(buttons);
  }

  public initDatatable(buttons) {
    this.dtOptions = {
      processing: true,
      serverSide: true,
      ajax: (params: any, callback) => {

        params.model_name = this.model_name;
        if (this.filter_trashed) {
          params.filter_trashed = this.filter_trashed;
        }

        // set filter params
        for (const key of Object.keys(this.datatableService.filter_array)) {
          const filter_item = this.datatableService.filter_array[key];
          if (filter_item) {
            params['filter_' + key] = filter_item;
          }
        }

        this.datatableService.getDatas(params).subscribe(resp => {
          callback(resp);
        });

      },
      responsive: true,
      columnDefs: [{'targets': [0], 'orderable': false, 'visible': true }],
      aaSorting: [[0, 'desc']],
      dom: 'Bfrtip',
      buttons: buttons,
    };
  }

  get_urlWithoutparams() {
    const urlTree = this.router.parseUrl(this.router.url);
    return '/' + urlTree.root.children['primary'].segments.map(it => it.path).join('/');
  }

  redirectTo(params) {
    // https://stackoverflow.com/a/49509706/2351696
    const uri = this.get_urlWithoutparams();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      if (params) {
        // this.router.navigate([uri], {queryParams: { filter: params }});
        this.router.navigate([uri], {queryParams: params});
      } else { this.router.navigate([uri]); }
    });
  }
}
