import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-homepage-preloader',
    template: `
      <div style="height:400px">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="x_panel">
              <div class="x_title">
                Loading...
                <div class="clearfix"></div>
              </div>
              <div class="x_content" style="height:200px">
                <div class="loader"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
   styles: [
     `/* https://projects.lukehaas.me/css-loaders/ */
      .loader,
      .loader:before,
      .loader:after {
        background: #2A3F54;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
      }
      .loader {
        color: #2A3F54;
        text-indent: -9999em;
        margin: 88px auto;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }
      .loader:before,
      .loader:after {
        position: absolute;
        top: 0;
        content: '';
      }
      .loader:before {
        left: -1.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }
      .loader:after {
        left: 1.5em;
      }
      @-webkit-keyframes load1 {
        0%,
        80%,
        100% {
          box-shadow: 0 0;
          height: 4em;
        }
        40% {
          box-shadow: 0 -2em;
          height: 5em;
        }
      }
      @keyframes load1 {
        0%,
        80%,
        100% {
          box-shadow: 0 0;
          height: 4em;
        }
        40% {
          box-shadow: 0 -2em;
          height: 5em;
        }
      }`
   ]
})

export class PreloaderComponent {
    
}
