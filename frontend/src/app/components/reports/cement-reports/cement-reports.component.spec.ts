import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CementReportsComponent } from './cement-reports.component';

describe('CementReportsComponent', () => {
  let component: CementReportsComponent;
  let fixture: ComponentFixture<CementReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CementReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CementReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
