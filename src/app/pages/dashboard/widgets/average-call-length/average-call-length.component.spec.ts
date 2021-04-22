import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCallLengthComponent } from './average-call-length.component';

describe('AverageCallLengthComponent', () => {
  let component: AverageCallLengthComponent;
  let fixture: ComponentFixture<AverageCallLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageCallLengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageCallLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
