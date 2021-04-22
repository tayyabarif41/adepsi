import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionExplorerLayoutComponent } from './interaction-explorer-layout.component';

describe('InteractionExplorerLayoutComponent', () => {
  let component: InteractionExplorerLayoutComponent;
  let fixture: ComponentFixture<InteractionExplorerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionExplorerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionExplorerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
