import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventTypeService } from '../../../events/eventtype/eventtype.service';
import { EventService } from '../../../events/event/event.service';
import { HomepageService } from '../homepage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calender',
  templateUrl: '../pages/calender.component.html'
})
export class CalenderComponent implements OnInit {
  calendarOptions: Options;
  events: any[];
  eventtypes: any;
  userbirthdays: any;
  // displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(
    private toastr: ToastrService,
    private eventtypeService: EventTypeService,
    private eventService: EventService,
    private homeService: HomepageService) {
  }

  ngOnInit() {
    this.eventtypeService.getEventTypes().subscribe(data => {
      this.eventtypes = data;
    });

    this.homeService.getUserBirthdays().subscribe(data => {
      this.userbirthdays = data;
    });

    this.homeService.getFullCalendarEvents().subscribe(data => {
      this.calendarOptions = {
        editable: false,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth',
        },
        contentHeight: 'auto',
        eventColor: 'yellow',
        events: data
      };
    });
  }

  eventClick(model: any) {
    this.toastr.success(model.event.event_desc + ', Venue: ' + model.event.event_location, model.event.event_name);
  }
}
