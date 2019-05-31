import { Component, OnInit } from '@angular/core';
// import { MenuService } from './menu.service';
import { AclpermissionService } from '../../modules/dashboard/aclpermission/aclpermission.service';
import { Router } from '@angular/router';
import { OrganizationService } from '../../modules/systemconfig/organization/organization.service';
import { AcademicYearService } from '../../modules/academics/academicyear/academicyear.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loading = false;
  org_details: any;
  menus: any = [];
  academicYear: any;

  constructor(private aclpermissionService: AclpermissionService,
    private organizationService: OrganizationService,
    private academicYearService: AcademicYearService,
    private router: Router) { }
  public getorganizationdetails() {
    this.organizationService.getactiveorganization().subscribe((data: Array<object>) => {
      this.org_details = data[0];
    });
  }
  ngOnInit() {
    this.loading = true;
    this.getorganizationdetails();
    this.academicYearService.getAcademicYears().subscribe((data: any) => {
      this.academicYear = data[0];
    });

    // $('img[src=""]').hide();
    const username = localStorage.getItem('username');
    this.aclpermissionService.getAclpermissions('for_sidebar_menu')
      .subscribe((data: Array<object>) => {
        // alert(JSON.stringify(data));
        this.menus = data;
        this.init_sidebar();
        this.loading = false;
      });
  }
  menuClicked(link, subsubmenuid) {
    sessionStorage.setItem('subsubmenu_id', subsubmenuid);
    this.router.navigate([link]);
  }

  init_sidebar() {
    const $BODY = $('body'), $MENU_TOGGLE = $('#menu_toggle'),
      $SIDEBAR_MENU = $('#sidebar-menu'),
      $SIDEBAR_FOOTER = $('.sidebar-footer'),
      $LEFT_COL = $('.left_col'),
      $RIGHT_COL = $('.right_col'),
      $NAV_MENU = $('.nav_menu'),
      $FOOTER = $('footer');

    const setContentHeight = function () {
      // reset height
      $RIGHT_COL.css('min-height', $(window).height());

      const bodyHeight = $BODY.outerHeight(),
        footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
        leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height();
      let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

      // normalize content
      contentHeight -= $NAV_MENU.height() + footerHeight;

      $RIGHT_COL.css('min-height', contentHeight);
    };


    setContentHeight();

    // $("#sidebar-menu").on("click","a", function(){
    //   alert("success");
    // });

    $('#sidebar-menu').on('click', 'a', function (ev) {
      const $li = $(this).parent();

      if ($li.is('.active')) {
        $li.removeClass('active active-sm');
        $('ul:first', $li).slideUp(function () {
          setContentHeight();
        });
      } else {
        // prevent closing menu if we are on child menu
        if (!$li.parent().is('.child_menu')) {
          $SIDEBAR_MENU.find('li').removeClass('active active-sm');
          $SIDEBAR_MENU.find('li ul').slideUp();
        } else {
          if ($BODY.is('.nav-sm')) {
            if (!$li.parent().is('.child_menu')) {
              $SIDEBAR_MENU.find('li').removeClass('active active-sm');
              $SIDEBAR_MENU.find('li ul').slideUp();
            }
          }
        }
        $li.addClass('active');

        $('ul:first', $li).slideDown(function () {
          setContentHeight();
        });
      }
    });
  }

}
