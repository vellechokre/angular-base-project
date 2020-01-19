import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppRoutingModule} from './app.routes';
import 'rxjs/add/operator/toPromise';

import {AccordionModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {CarouselModule} from 'primeng/primeng';
import {ColorPickerModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {ChipsModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {DataScrollerModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {LightboxModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';
import {OrganizationChartModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {PickListModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';
import {SlideMenuModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {StepsModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {TerminalModule} from 'primeng/primeng';
import {TieredMenuModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {TreeModule} from 'primeng/primeng';
import {TreeTableModule} from 'primeng/primeng';
import { ProgressSpinnerModule } from 'primeng/primeng';

import {AppComponent} from './app.component';
import {AppMenuComponent, AppSubMenuComponent} from './core/components/menu/app.menu.component';
import {AppTopbarComponent} from './core/components/topbar/app.topbar.component';
import {AppFooterComponent} from './core/components/footer/app.footer.component';
import {AppRightpanelComponent} from './core/components/rightpanel/app.rightpanel.component';
import {AppInlineProfileComponent} from './core/components/profile/app.profile.component';
import {DashboardDemoComponent} from './product/modules/dashboard/dashboarddemo.component';
import {SampleDemoComponent} from './demo/view/sampledemo.component';
import {FormsDemoComponent} from './demo/view/formsdemo.component';
import {DataDemoComponent} from './demo/view/datademo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {UtilsDemoComponent} from './demo/view/utilsdemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';

import {CarService} from './demo/service/carservice';
import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import { BASE_URL } from './core/http/core/api.service';
import { environment } from '../environments/environment';
import { AuthService } from './core/services/auth/Auth.service';
import { AuthGuardService } from './core/services/auth/AuthGuard.service';
import { LoginComponent } from './core/components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuickAddPatientComponent } from './product/components/quick-add-patient/quick-add-patient.component';
import { ScheduleAppointmentComponent } from './product/components/schedule-appointment/schedule-appointment.component';
import { PatientService } from './product/services/patient.service';
import { RequestInterceptor } from './core/http/request-interceptor.service';
import { CalendarComponent } from './product/components/calendar/calendar.component';
import { GetClinic } from './product/services/get-clinic.service';
import { GetBranches } from './product/services/get-branches.service';
import { AuthenticateService } from './product/services/authenticate.service';
import { CountriesService } from './product/services/countries.service';
import { StatesService } from './product/services/states.service';
import { CitiesService } from './product/services/cities.service';
import { AppointmentService } from './product/services/appointment.service';
import { TreatmentCategoriesService } from './product/services/treatmentCategories';
import { TreatmentTypesService } from './product/services/treatmenttypes.service';
import { AlertComponent } from './core/components/alert/alert.component';
import { AlertService } from './core/services/Alert.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoaderModule } from './core/components/loader/loader.module';
import { RecordVisitService } from './product/services/record-visit.service';
import { TreatmentsComponent } from './product/components/treatments/treatments.component';
import { TreatmentCategoriesComponent } from './product/components/treatment-categories/treatment-categories.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        ColorPickerModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        SharedModule,
        ContextMenuModule,
        DataGridModule,
        DataListModule,
        DataScrollerModule,
        DataTableModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        GMapModule,
        GrowlModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScheduleModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        HttpClientModule,
        AppRoutingModule,
        ProgressSpinnerModule,
        LoaderModule
    ],
    declarations: [
        AppComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppTopbarComponent,
        AppFooterComponent,
        AppRightpanelComponent,
        AppInlineProfileComponent,
        DashboardDemoComponent,
        SampleDemoComponent,
        FormsDemoComponent,
        DataDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent, 
        MenusDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        UtilsDemoComponent,
        DocumentationComponent,
        LoginComponent,
        QuickAddPatientComponent,
        ScheduleAppointmentComponent,
        CalendarComponent,
        AlertComponent,
        TreatmentsComponent,
        TreatmentCategoriesComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CarService, CountryService, EventService, NodeService,
        {provide: BASE_URL, useValue: environment.baseUrl},
        AuthService,
        AuthGuardService,
        AppointmentService,
        PatientService,
        GetClinic,
        GetBranches,
        AuthenticateService,
        CountriesService,
        StatesService,
        CitiesService,
        TreatmentCategoriesService,
        TreatmentTypesService,
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        AlertService,
        MessageService,
        RecordVisitService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
