import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
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
import { AuthGuardService } from './core/services/auth/AuthGuard.service';
import { LoginComponent } from './core/components/login/login.component';
import { CalendarComponent } from './product/components/calendar/calendar.component';
import { TreatmentsComponent } from './product/components/treatments/treatments.component';
import { TreatmentCategoriesComponent } from './product/components/treatment-categories/treatment-categories.component';
import { ApplicationContant } from './core/modals/app.constant';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardDemoComponent, canActivate: [AuthGuardService]},
    {path: 'sample', component: SampleDemoComponent},
    {path: 'forms', component: FormsDemoComponent},
    {path: 'data', component: DataDemoComponent},
    {path: 'panels', component: PanelsDemoComponent},
    {path: 'overlays', component: OverlaysDemoComponent},
    {path: 'menus', component: MenusDemoComponent},
    {path: 'messages', component: MessagesDemoComponent},
    {path: 'misc', component: MiscDemoComponent},
    {path: 'empty', component: EmptyDemoComponent},
    {path: 'charts', component: ChartsDemoComponent},
    {path: 'file', component: FileDemoComponent},
    {path: 'utils', component: UtilsDemoComponent},
    {path: 'documentation', component: DocumentationComponent},
    {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuardService]},
    { path: 'patient', loadChildren: './product/modules/Patient/patient.module#PatientModule', canActivate: [AuthGuardService]},
    { path: 'record-visit', loadChildren: './product/modules/record-visit/record-visit.module#RecordVisitModule', canActivate: [AuthGuardService]},
    { path: 'treatments', component: TreatmentsComponent, canActivate: [AuthGuardService]},
    { path: 'treatmentCategories', component: TreatmentCategoriesComponent, canActivate: [AuthGuardService]},
    {path: '', pathMatch:'full' , redirectTo: ApplicationContant.HOME_URL},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
