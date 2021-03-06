import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  status = 'ONLINE';
  isConnected = true;

  constructor(private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'ONLINE';
      } else {
        this.status = 'OFFLINE';
      }
    });
  }

  ngOnInit() {
  }
}
