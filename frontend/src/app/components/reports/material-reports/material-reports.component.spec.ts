import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialReportsComponent } from './material-reports.component';

describe('MaterialReportsComponent', () => {
  let component: MaterialReportsComponent;
  let fixture: ComponentFixture<MaterialReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
