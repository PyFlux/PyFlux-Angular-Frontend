import { Component, OnInit } from '@angular/core';
import { MenuitemsService } from '../menuitems.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generalsettings',
  templateUrl: '../pages/generalsettings.component.html',
})
export class GeneralSettingsComponent implements OnInit {
    checked_items = [];

    constructor(
        private toastr: ToastrService,
        private menuitemsService:  MenuitemsService
    ) { }

    ngOnInit() {
        this.menuitemsService.getGeneralSettings()
        .subscribe((data:  Array<object>) => {
            for (const key of Object.keys(data)) {
                // for (const item of data) {
                if (data[key] === '1') {
                    this.checked_items.push(key);
                }
                // console.log(key);
            }
            // console.log(data);
            // console.log(this.checked_items);
        });
    }

    checkValue(event: any, key) {
        // console.log(key, event.target.checked);
        this.SaveItem({key: key, value: event.target.checked});
    }

    SaveItem(param) {
        this.menuitemsService.saveGeneralSetting(param)
        .subscribe((data:  Array<object>) => {
            this.toastr.success('Success..!', `GeneralSettings Updated Succesfully.`);
        });
    }
}
