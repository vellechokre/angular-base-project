import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsComponent } from '../../components/patient-details/patient-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule, AutoCompleteModule, BreadcrumbModule, ButtonModule, CalendarModule, CarouselModule, ColorPickerModule, ChartModule, CheckboxModule, TreeTableModule, TreeModule, TooltipModule, ToolbarModule, ToggleButtonModule, TieredMenuModule, InputTextareaModule, InputTextModule, SharedModule, DropdownModule, DataTableModule, MenubarModule, DialogModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { PatientGridComponent } from './patient-grid/patient-grid.component';
import { PendingAmountPatientGrid } from './pending-amount-patient-grid/pending-amount-patient-grid.component';

const routes: Routes = [
  {
    path: '', component: PatientGridComponent,
    /* children: [                          //<---- child components declared here
      {
        path: 'addpatient',
        component: PatientDetailsComponent
      }
    ] */
  },
  { path: 'addpatient', component: PatientDetailsComponent },
];

@NgModule({
  declarations: [
    PatientComponent,
    PatientDetailsComponent,
    PatientGridComponent,
    PendingAmountPatientGrid
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    ColorPickerModule,
    ChartModule,
    CheckboxModule,
    SharedModule,
    InputTextModule,
    InputTextareaModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    HttpClientModule,
    DropdownModule,
    RouterModule.forChild(routes),
    DataTableModule,
    MenubarModule,
    DialogModule
  ],
  exports: [
    RouterModule
  ]
})
export class PatientModule { }
