import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservComponent } from './observ.component';

describe('ObservComponent', () => {
  let component: ObservComponent;
  let fixture: ComponentFixture<ObservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
