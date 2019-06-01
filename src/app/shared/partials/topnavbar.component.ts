import {Component, TemplateRef, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

import {SharedService} from '../../shared/shared.service';
// import { Globals } from './../globals';
import {SocketService} from '../../shared/socket/socket.service';
import {ChatMessage} from '../../shared/socket/chat';
import * as $ from 'jquery';

@Component({
  selector: 'app-topnav-bar',
  templateUrl: './topnavbar.component.html'
})

export class TopNavBarComponent implements OnInit {
  username = localStorage.getItem('username');
  userid = localStorage.getItem('user_id');
  user_type = localStorage.getItem('user_type');
  fullname = localStorage.getItem('fullname');
  subdomain = localStorage.getItem('sub_domain');

  activestudent: string; // activechild = localStorage.getItem('activechild');
  messagegroupid: string;
  unreadcount: number;
  notifications: any;
  messages: any = {};
  mess: any = {};
  count;
  quotes: any = {};
  currentuserprofile: any = {};
  modalRef: BsModalRef;
  parentchildrens: any;
  activestudentfullname: string;


  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private sharedservice: SharedService,
    private socketService: SocketService,
  ) {
  }

  toggleClicked(event: MouseEvent) {
    const body = $('body');
    const menu = $('#sidebar-menu');

    // toggle small or large menu
    if (body.hasClass('nav-md')) {
      menu.find('li.active ul').hide();
      menu.find('li.active').addClass('active-sm').removeClass('active');
    } else {
      menu.find('li.active-sm ul').show();
      menu.find('li.active-sm').addClass('active').removeClass('active-sm');
    }
    body.toggleClass('nav-md nav-sm');
  }

  public getuserdata() {
    this.sharedservice.getUserProfile().subscribe((data: any) => {
      this.currentuserprofile = data[0];
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    if (!this.fullname) {
      this.fullname = this.username;
    }
    this.getuserdata();
    this.messagegroupid = this.route.snapshot.paramMap.get('id');
  }
}
