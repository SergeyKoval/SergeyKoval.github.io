import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuActionsComponent } from './left-menu-actions.component';

describe('LeftMenuActionsComponent', () => {
  let component: LeftMenuActionsComponent;
  let fixture: ComponentFixture<LeftMenuActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
