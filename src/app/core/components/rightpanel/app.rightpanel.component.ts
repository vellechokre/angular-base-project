import {Component, OnDestroy, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {AppComponent} from '../../../app.component';
declare var jQuery: any;

@Component({
    selector: 'app-rightpanel',
    templateUrl: './app.rightpanel.component.html'
})
export class AppRightpanelComponent implements OnDestroy, AfterViewInit {

    rightPanelMenuScroller: HTMLDivElement;

    @ViewChild('rightPanelMenuScroller') rightPanelMenuScrollerViewChild: ElementRef;

    constructor(public app: AppComponent) {}

    ngAfterViewInit() {
        this.rightPanelMenuScroller = <HTMLDivElement> this.rightPanelMenuScrollerViewChild.nativeElement;

        setTimeout(() => {
            jQuery(this.rightPanelMenuScroller).nanoScroller({flash: true});
        }, 10);
    }

    ngOnDestroy() {
        jQuery(this.rightPanelMenuScroller).nanoScroller({flash: true});
    }
}
