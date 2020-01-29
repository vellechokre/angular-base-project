import { Component, Input } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar topbar-custom clearfix">
            <div class="topbar-left topbar-custom-left">
                <div class="logo"></div>
            </div>
            {{isUserAuthorised}}
            <div *ngIf="isUserAuthorized" class="topbar-right topbar-custom-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i></i>
                </a>

                <!--<a id="rightpanel-menu-button" href="#" (click)="app.onRightPanelButtonClick($event)">
                    <i class="material-icons">more_vert</i>
                </a>-->

                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="material-icons">menu</i>
                </a>

                <a id="rightpanel-menu-button" href="#" (click)="app.onLogoutClick($event)">
                <i class="material-icons">power_settings_new</i>
                </a>

            </div>
        </div>
    `
})
export class AppTopbarComponent {

    @Input() isUserAuthorized: boolean = false;

    constructor(public app: AppComponent) { }

}

