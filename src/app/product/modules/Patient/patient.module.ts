import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsComponent } from '../../components/patient-details/patient-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule, AutoCompleteModule, BreadcrumbModule, ButtonModule, CalendarModule, CarouselModule, ColorPickerModule, ChartModule, CheckboxModule, TreeTableModule, TreeModule, TooltipModule, ToolbarModule, ToggleButtonModule, TieredMenuModule, InputTextareaModule, InputTextModule, SharedModule, DropdownModule, DataTableModule, MenubarModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { PatientGridComponent } from './patient-grid/patient-grid.component';

const routes: Routes = [
  { path: '', component: PatientGridComponent },
  { path: '/addpatient', component: PatientDetailsComponent },
];

@NgModule({
  declarations: [
    PatientComponent,
    PatientDetailsComponent,
    PatientGridComponent
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
    MenubarModule
  ],
  exports: [
    RouterModule
  ]
})
export class PatientModule { }
