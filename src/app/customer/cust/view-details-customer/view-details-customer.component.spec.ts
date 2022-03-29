import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsCustomerComponent } from './view-details-customer.component';

describe('ViewDetailsCustomerComponent', () => {
  let component: ViewDetailsCustomerComponent;
  let fixture: ComponentFixture<ViewDetailsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
