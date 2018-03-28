import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {
  EventService,
  EventDetailsRouteActivatorService,
  ResolvedEventDataService
} from './shared/index';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent
} from './events/index';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './errors/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [EventService,
    EventDetailsRouteActivatorService,
    ResolvedEventDataService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyCreateEvent }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


function checkDirtyCreateEvent(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('all data will be lost?');
  }
  return true;
}
