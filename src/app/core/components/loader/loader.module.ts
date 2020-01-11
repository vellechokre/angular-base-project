import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { ProgressSpinnerModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    ProgressSpinnerModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
