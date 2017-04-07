import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { CreateMemberComponent } from './create-member/create-member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'members-new',
    component: CreateMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
