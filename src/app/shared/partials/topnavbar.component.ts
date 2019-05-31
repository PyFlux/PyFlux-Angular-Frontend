import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { MessagesService } from '../../modules/communications/messages/messages.service';
import { QuotesService } from '../../modules/events/quotes/quotes.service';
import { ParentsService } from '../../modules/parent/parents/parents.service';
import { SharedService } from '../../shared/shared.service';
import { ChatService } from '../../modules/communications/chat/chat.service';
// import { Globals } from './../globals';
import { SocketService } from '../../shared/socket/socket.service';
import { ChatMessage } from '../../shared/socket/chat';
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
  activestudentfullname:string;
  

  constructor(
    private modalService: BsModalService,
    private messagesService: MessagesService,
    private quotesservice: QuotesService,
    private route: ActivatedRoute,
    private sharedservice: SharedService,
    private socketService: SocketService,
    private chatService: ChatService,
    private parentsService: ParentsService
  ) { }

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
  readNotifications(){
    if (this.unreadcount>0) {
      this.chatService.readNotifications(this.userid)
        .subscribe(data => {
          this.unreadcount = 0;
        });
     }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  changeActiveStudent() {
    // make ajax request to server to change active child
    this.parentsService.changeActiveStudent(this.activestudent).subscribe((data: any) => {
      // localStorage.setItem('activechild', this.activechild);
      this.modalRef.hide();
      window.location.reload(true);
    });
  }

  ngOnInit() {
    if (this.user_type === 'P'){
      // get parents_childs
      this.parentsService.getChildrens(this.userid).subscribe((data: any) => {
        this.parentchildrens = data['students'];
        this.activestudent = data['activestudent'];
        let obj = data['students'].find(o => o.id === data['activestudent']);
        this.activestudentfullname = obj.fullname;
        // localStorage.setItem('activechild', this.activechild);
        // if (!this.activechild) {
        //   // alert('empty activechild');
        //   // if active child is not set in localStorage
        //   // select first item as active child
        //   this.activechild = data[0]['id'];//
        //   localStorage.setItem('activechild', this.activechild);
        // }
        
      });
    }
    if (!this.fullname) {
      this.fullname = this.username;
    }
    this.socketService.initSocket();
    this.socketService.onChat()
    .subscribe((chat: ChatMessage) => {      
      const data = chat.message;
      if (data.to_user == this.userid && chat.sub_domain == this.subdomain) {
        // if other user's chat is active then
        // alert(this.socketService.activechatuser);
        if (this.socketService.activechatuser == data.from_user) {
          // remove notification from db, don't append notification
          
        } else {
          this.unreadcount++;
          this.notifications.unshift({message: 'You have a new message.'})
        }
      }
    });
    this.chatService.getNotifications('10') // get 10 recent notifications
      .subscribe(data => {
        this.notifications = data['notifications'];
        this.unreadcount = data['unreadcount'];
        
      });
      
    
    this.getuserdata();
    this.messagegroupid = this.route.snapshot.paramMap.get('id');
   
    //  if (this.messagegroupid) {
    this.messagesService.getMessage_of_user()
      .subscribe(data => {
        this.count = data['count'];
        
        this.messages = data['message'];
        
        
       
      });
    this.quotes = this.route.snapshot.paramMap.get('id');
    this.quotesservice.getcurrentquotes()
      .subscribe(data => {
        this.quotes = data;
      });
  }

}
