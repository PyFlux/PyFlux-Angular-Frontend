import {Component, OnInit, OnDestroy, Renderer2} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from './auth.service';
import {ToastrService} from 'ngx-toastr';

// import { AlertService } from '../alert/alert.service';
// import { User } from '../models/user';

// declare var particlesJS: any;
// import * as particlesJS from '../../../assets/particles/js/particles.js';
// import '../../../assets/particles/js/particles.js';
declare var particlesJS: any;
declare var tinymce: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: any = {};
  loading = false;
  returnUrl: string;
  loginErrors: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toastr: ToastrService,
  ) {
  }

  onLogin(): void {
    this.loading = true;
    this.auth.login(this.user)
      .subscribe(response => {
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([this.returnUrl]);
        },
        error => {

          if (error.error.status === '0') {
            this.toastr.info(error.error.message, 'Error..!');
          }
          else if (error.error.status === '1') {
            this.toastr.warning(error.error.message, 'Error..!');
          }
          else {
            this.toastr.error('Incorrect username or password. Try again...', 'Error..!');
          }
          this.loading = false;
        }
      );
  }

  ngOnInit(): void {

    particlesJS('particles-js', {
      'particles': {
        'number': {'value': 80, 'density': {'enable': true, 'value_area': 800}},
        'color': {'value': '#ffffff'},
        'shape': {
          'type': 'circle',
          'stroke': {'width': 0, 'color': '#000000'},
          'polygon': {'nb_sides': 5},
          'image': {'src': 'img/github.svg', 'width': 100, 'height': 100}
        },
        'opacity': {'value': 0.5, 'random': false, 'anim': {'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false}},
        'size': {'value': 3, 'random': true, 'anim': {'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false}},
        'line_linked': {'enable': true, 'distance': 150, 'color': '#ffffff', 'opacity': 0.4, 'width': 1},
        'move': {
          'enable': true,
          'speed': 4,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {'enable': false, 'rotateX': 600, 'rotateY': 1200}
        }
      },
      'interactivity': {
        'detect_on': 'window',
        'events': {'onhover': {'enable': true, 'mode': 'repulse'}, 'onclick': {'enable': true, 'mode': 'push'}, 'resize': true},
        'modes': {
          'grab': {'distance': 400, 'line_linked': {'opacity': 1}},
          'bubble': {'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3},
          'repulse': {'distance': 200, 'duration': 0.4},
          'push': {'particles_nb': 4},
          'remove': {'particles_nb': 2}
        }
      },
      'retina_detect': true
    });

    // tinymce.init({
    //   selector: 'textarea.texteditor', theme: 'modern',
    //   subfolder: '',
    //   height: '400',
    //   relative_urls: false,
    //   remove_script_host: false,
    //   convert_urls: true,
    //   plugins: [
    //     'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
    //     'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
    //     'save table contextmenu directionality emoticons template paste textcolor filemanager'
    //   ],
    //   image_advtab: true,
    //   content_css: '{{asset("packages/extensionsvalley/dashboard/js/tinymce/skins/lightgray/content.min.css")}}',
    //   toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
    //   style_formats: [
    //     {title: 'Bold text', inline: 'b'},
    //     {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
    //     {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
    //     {title: 'Example 1', inline: 'span', classes: 'example1'},
    //     {title: 'Example 2', inline: 'span', classes: 'example2'},
    //     {title: 'Table styles'},
    //     {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    //   ],
    // });

    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
    this.renderer.addClass(document.body, 'login');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login');
  }

}
