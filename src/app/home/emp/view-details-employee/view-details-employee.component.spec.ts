import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsEmployeeComponent } from './view-details-employee.component';

describe('ViewDetailsEmployeeComponent', () => {
  let component: ViewDetailsEmployeeComponent;
  let fixture: ComponentFixture<ViewDetailsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
