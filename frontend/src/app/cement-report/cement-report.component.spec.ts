import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CementReportComponent } from './cement-report.component';

describe('CementReportComponent', () => {
  let component: CementReportComponent;
  let fixture: ComponentFixture<CementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CementReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
