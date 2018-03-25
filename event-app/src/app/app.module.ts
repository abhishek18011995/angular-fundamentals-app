import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventService } from './shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventDetailsRouteActivatorService } from './shared/event-details-route-activator.service';
import { ResolvedEventDataService } from './shared/resolved-event-data.service';


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
    ToastrModule.forRoot()
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
