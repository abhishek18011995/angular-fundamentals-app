import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { AuthService } from './shared/auth/auth.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleDivComponent } from './shared/collapsible-div/collapsible-div.component';
import { DurationPipe } from './shared/pipes/duration.pipe';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleDivComponent,
    DurationPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), NgbModule.forRoot()
  ],
  providers: [EventService,
    EventDetailsRouteActivatorService,
    ResolvedEventDataService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyCreateEvent },
    AuthService
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
