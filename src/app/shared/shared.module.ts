import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSpinnerComponent } from './custom-spinner/custom-spinner.component';



@NgModule({
  declarations: [
    CustomSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSpinnerComponent
  ]
})
export class SharedModule { }
