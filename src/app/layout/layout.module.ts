import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// Material Modules
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
// Import your AvatarModule
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'interaction-explorer',
        loadChildren: () => import('src/app/pages/interaction-explorer/interaction-explorer.module').then(m => m.InteractionExplorerModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('src/app/pages/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },

];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    HttpClientModule,
    AvatarModule,
    MatBadgeModule
  ]
})
export class LayoutModule { }
