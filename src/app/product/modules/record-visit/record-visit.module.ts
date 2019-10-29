import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule, AutoCompleteModule, BreadcrumbModule, ButtonModule, CalendarModule, CarouselModule, ColorPickerModule, ChartModule, CheckboxModule, TreeTableModule, TreeModule, TooltipModule, ToolbarModule, ToggleButtonModule, TieredMenuModule, InputTextareaModule, InputTextModule, SharedModule, DropdownModule, DataTableModule, MenubarModule, DialogModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { RecordVisitComponent } from './record-visit/record-visit.component';
import { RecordVisitDetailComponent } from './record-visit-detail/record-visit-detail.component';
import { RecordVisitSearchComponent } from './record-visit-search/record-visit-search.component';

const routes: Routes = [
  {
    path: '', component: RecordVisitComponent,
  },
  // { path: 'addpatient', component: PatientDetailsComponent },
];

@NgModule({
  declarations: [
    RecordVisitComponent,
    RecordVisitDetailComponent,
    RecordVisitSearchComponent
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
export class RecordVisitModule { }
