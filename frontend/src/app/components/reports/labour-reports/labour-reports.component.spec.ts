import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourReportsComponent } from './labour-reports.component';

describe('LabourReportsComponent', () => {
  let component: LabourReportsComponent;
  let fixture: ComponentFixture<LabourReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
