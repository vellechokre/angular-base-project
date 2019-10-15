/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppTopbarComponent } from './core/components/topbar/app.topbar.component';
import { AppRightpanelComponent} from './core/components/rightpanel/app.rightpanel.component';
import { AppInlineProfileComponent } from './core/components/profile/app.profile.component';
import { AppFooterComponent } from './core/components/footer/app.footer.component';
import { AppMenuComponent, AppSubMenuComponent } from './core/components/menu/app.menu.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],
        declarations: [ AppComponent,
                AppTopbarComponent,
                AppMenuComponent,
                AppSubMenuComponent,
                AppFooterComponent,
                AppInlineProfileComponent,
                AppRightpanelComponent
            ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
