import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerpopupComponent } from './managerpopup.component';

describe('ManagerpopupComponent', () => {
  let component: ManagerpopupComponent;
  let fixture: ComponentFixture<ManagerpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
