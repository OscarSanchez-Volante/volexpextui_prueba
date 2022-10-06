import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchButtonComponent } from './switch-button.component';

describe('SwitchButtonComponent', () => {
  let component: SwitchButtonComponent;
  let fixture: ComponentFixture<SwitchButtonComponent>;
  let buttonToggleLabelElements: HTMLLabelElement[];
  let buttonToggleInstances: any;
  let groupInstance: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
