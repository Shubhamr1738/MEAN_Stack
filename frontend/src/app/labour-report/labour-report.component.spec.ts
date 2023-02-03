import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourReportComponent } from './labour-report.component';

describe('LabourReportComponent', () => {
  let component: LabourReportComponent;
  let fixture: ComponentFixture<LabourReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
