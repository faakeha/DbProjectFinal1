import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicessaltsugarComponent } from './spicessaltsugar.component';

describe('SpicessaltsugarComponent', () => {
  let component: SpicessaltsugarComponent;
  let fixture: ComponentFixture<SpicessaltsugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpicessaltsugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicessaltsugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
