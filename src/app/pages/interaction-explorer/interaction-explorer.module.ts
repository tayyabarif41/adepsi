import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionExplorerLayoutComponent } from './interaction-explorer-layout/interaction-explorer-layout.component';
import { RouterModule, Routes } from '@angular/router';

// Angular Material Modules
import { MatRippleModule } from '@angular/material/core';

const routes: Routes = [
  { path: '', component: InteractionExplorerLayoutComponent }
];

@NgModule({
  declarations: [InteractionExplorerLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRippleModule
  ]
})
export class InteractionExplorerModule { }
