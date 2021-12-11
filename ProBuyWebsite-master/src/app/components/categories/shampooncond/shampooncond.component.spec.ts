import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooncondComponent } from './shampooncond.component';

describe('ShampooncondComponent', () => {
  let component: ShampooncondComponent;
  let fixture: ComponentFixture<ShampooncondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShampooncondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampooncondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
