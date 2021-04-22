import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: SettingsLayoutComponent }
]

@NgModule({
  declarations: [SettingsLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
