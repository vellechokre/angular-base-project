import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: PatientComponent}
];

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatientModule { }
