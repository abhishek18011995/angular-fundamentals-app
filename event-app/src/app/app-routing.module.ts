import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  EventDetailsRouteActivatorService,
  ResolvedEventDataService
} from './shared/index';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent
} from './events/index';

import { Error404Component } from './errors/error404/error404.component';
import { UserModule } from './user/user.module';
import { CreateSessionComponent } from './events/create-session/create-session.component';

const appRoutes: Routes = [
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: ResolvedEventDataService }
  }, {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
    pathMatch: 'full'
  }, {
    path: 'events/sessions/new',
    component: CreateSessionComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
    pathMatch: 'full'
  }, {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventDetailsRouteActivatorService],
    pathMatch: 'full',
  }, {
    path: '404',
    component: Error404Component,
  }, {
    path: 'user',
    // loadChildren: './user/user.module#UserModule'
    loadChildren: () => UserModule
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
