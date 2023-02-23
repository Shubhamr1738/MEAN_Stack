import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSitesComponent } from './manager-sites.component';

describe('ManagerSitesComponent', () => {
  let component: ManagerSitesComponent;
  let fixture: ComponentFixture<ManagerSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerSitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
