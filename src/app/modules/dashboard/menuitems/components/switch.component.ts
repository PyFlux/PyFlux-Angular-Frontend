// https://zainzafar90.github.io/angular-switchery-ios/

import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-ng-switchery',
    template: `
        <div class="checkbox {{customClasses}}"
        [ngClass]="{disabled: disabled, 'checkbox-double':(offLabel && offLabel.length>0), 'checkbox-right': sticked}">
        <label>
            {{offLabel}}
            <input type="checkbox" class="switchery" [disabled]="disabled" [ngModel]="checked" (ngModelChange)="change($event)">
            <span class="switchery {{color}} {{size}}">
            <small></small>
            </span>
            {{onLabel}}
        </label>
        </div>
    `,
    styleUrls: ['../pages/switch.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class NgSwitcheryComponent {
    @Input() checked: boolean;
    @Input() disabled?: boolean;
    @Input() onLabel?: string;
    @Input() offLabel?: string;
    @Input() color?: string;
    @Input() size?: string;
    @Input() sticked?: boolean;
    @Input() customClasses?: string;

    @Output() checkedChange = new EventEmitter();

    constructor() {}

    // ngOnInit() {}

    change(event) {
        this.checked = event;
        this.checkedChange.emit(event);
    }
}
