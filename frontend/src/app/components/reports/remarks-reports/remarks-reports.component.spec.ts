import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksReportsComponent } from './remarks-reports.component';

describe('RemarksReportsComponent', () => {
  let component: RemarksReportsComponent;
  let fixture: ComponentFixture<RemarksReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarksReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemarksReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
