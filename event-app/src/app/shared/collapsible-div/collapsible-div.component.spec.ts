import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleDivComponent } from './collapsible-div.component';

describe('CollapsibleDivComponent', () => {
  let component: CollapsibleDivComponent;
  let fixture: ComponentFixture<CollapsibleDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
