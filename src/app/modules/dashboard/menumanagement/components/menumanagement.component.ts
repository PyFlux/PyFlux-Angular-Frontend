import { Component, OnInit } from '@angular/core';
import { MenumanagementService } from '../menumanagement.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menumanagement',
  templateUrl: '../pages/menumanagement.component.html'
})

export class MenumanagementComponent implements OnInit {
  menus: any;

  constructor(
    private menumanagementService:  MenumanagementService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const json_data = JSON.stringify(this.menus);
    this.menumanagementService.postMenumanagement({'menus': this.menus})
    .subscribe((response) => {
      this.toastr.success('Success..!', `Menu Items Added Successfully.`);
    }, // success
    error => {
      this.toastr.error('Error!');
    });
  }

}
