import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventDetailsRouteActivatorService } from './shared/event-details-route-activator.service';

const appRoutes: Routes = [
  {
    path: 'events',
    component: EventListComponent
  }, {
    path: 'events/new',
    component: CreateEventComponent,
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
