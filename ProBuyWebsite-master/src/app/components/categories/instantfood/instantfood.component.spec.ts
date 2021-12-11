import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantfoodComponent } from './instantfood.component';

describe('InstantfoodComponent', () => {
  let component: InstantfoodComponent;
  let fixture: ComponentFixture<InstantfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
