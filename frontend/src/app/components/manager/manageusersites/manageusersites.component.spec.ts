import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageusersitesComponent } from './manageusersites.component';

describe('ManageusersitesComponent', () => {
  let component: ManageusersitesComponent;
  let fixture: ComponentFixture<ManageusersitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageusersitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageusersitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
