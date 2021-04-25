import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { RecordCallsComponent } from './widgets/record-calls/record-calls.component';
import { StatisticsComponent } from './widgets/statistics/statistics.component';
import { AverageCallLengthComponent } from './widgets/average-call-length/average-call-length.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: '', component: DashboardLayoutComponent }
];

@NgModule({
  declarations: [DashboardLayoutComponent, RecordCallsComponent, StatisticsComponent, AverageCallLengthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
