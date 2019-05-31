import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfilepageService } from '../../profilepage.service';

@Component({
  selector: 'app-feetransactions',
  template: `
  <div class="x_panel">
  <!--<div class="x_title">
    <h2>Fee Transactions</h2>
    <div class="clearfix"></div>
  </div>-->
  <div class="x_content">
    <table class="table table-striped table-bordered" datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger">
      <thead>
        <tr>
          <th>ID#</th>
          <th>Fee</th>
          <th>Payment Mode</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let transaction of feetransactions">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.feecategory_name }}</td>
          <td>
            <ng-container *ngIf="transaction.mode === 'cash'">{{ transaction.mode }}</ng-container>
            <ng-container *ngIf="transaction.mode === 'cheque'">
                Cheque No: {{ transaction.cheque_no }}<br>
                Cheque Date: {{ transaction.cheque_date }}<br>
                Bank: {{ transaction.bank_name }}
            </ng-container>
          </td>
          <td>{{ transaction.amount | currency: 'INR' }}</td>
          <td>{{ transaction.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
})

export class FeetransactionsComponent implements OnDestroy, OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  feetransactions:  Array<object> = [];

  constructor(private profileService: ProfilepageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      buttons: ['copy', 'csv', 'print'],
    };

    this.getFeetransactions();
  }

  public getFeetransactions() {
    this.profileService.getFeetransactions().subscribe((data:  Array<object>) => {
      this.feetransactions  =  data;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
