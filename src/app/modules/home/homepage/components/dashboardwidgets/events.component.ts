import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-homepage-dashboard-events',
    styleUrls: ['../../pages/events.component.css'],

    template: `
    
    <!DOCTYPE html>
    <html>
    <head>
    // <meta name="viewport" content="width=10, initial-scale=1">
    <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      background-color: white;
    }
    
    /* The actual timeline (the vertical ruler) */
    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    /* The actual timeline (the vertical ruler) */
    .timeline::after {
      content: '';
      position: absolute;
      width: 4px;
      background-color: #EE316B;
      top: 0;
      bottom: 0;
      left: 0%;
      margin-left: 6px ;
      
    }
    
    /* Container around content */
    .container {
      padding: 5px 5px;
      position: relative;
      background-color: inherit;
      width: 50%;
    }
    
    /* The circles on the timeline */
    .container::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: 5px;
      background-color: white;
      border: 4px solid #EE316B;
      
      border-radius: 50%;
      z-index: 1;
    }
    
    /* Place the container to the left */
    .left {
      left: 0;
    }
    
    /* Place the container to the right */
    .right {
      left: 0%;
    }
    
    /* Add arrows to the left container (pointing right) */
    
    
    /* Add arrows to the right container (pointing left) */
    // .right::before {
    //   content: " ";
    //   height: 0;
    //   position: absolute;
    //   top: 6px;
    //   width: 0;
    //   z-index: 1;
    //   left: 1px;
    //   border: medium solid white;
    //   border-width: 10px 10px 10px 0;
    //   border-color: transparent white transparent transparent;
    //   color: coral;
    // }
    
    /* Fix the circle for containers on the right side */
    .right::after {
      left: -73px;
    }
    
    /* The actual content */
    .content {
      padding: 20px 20px;
      background-color: white;
      position: relative;
      border-radius: 6px;
      width: 140%;
    }
    
    /* Media queries - Responsive timeline on screens less than 600px wide */
    @media screen and (max-width: 600px) {
      /* Place the timelime to the left */
      .timeline::after {
      left: 31px;
      }
      
      /* Full-width containers */
      .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
      }
      
      /* Make sure that all arrows are pointing leftwards */
      .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
      }
    
      /* Make sure all circles are at the same spot */
      .left::after, .right::after {
      left: 15px;
      }
      
      /* Make all right containers behave like the left ones */
      .right {
      left: 0%;
      }
    }
    </style>
    </head>
    <body>
    <div class ="x_panel">

    <div class="x_title">
    <h2 >Events</h2>
    <div class="clearfix"></div>
    
    </div>

    <div class="timeline"  *ngIf="events?.length != 0"  >
      <div class="container right"*ngFor="let event of events" >
        <div class="content"  style="background-color:#F9F7F1">
          
          <p style = "color:grey">
                {{event.event_name}}: 
                <span [innerHTML] = "event.event_desc"></span>
                <br> at {{event.event_location}}
                <br> on {{event.start_date}}.</p>
        
        </div>
      </div>
    </div>
    
   
    <div *ngIf="events?.length == 0">
        <p> No Events.</p>
    </div>
    </div>
    </body>
    </html>

    

    
​

    
`,
})

export class DashboardEventsComponent {
    @Input() events;
    colors=['red','blue','green'];
    randomItem;

    getColor(){
      this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
      console.log('s',this.randomItem);
      return this.randomItem;
   }
   
}
