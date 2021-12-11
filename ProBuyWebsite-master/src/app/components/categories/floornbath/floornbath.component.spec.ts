import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloornbathComponent } from './floornbath.component';

describe('FloornbathComponent', () => {
  let component: FloornbathComponent;
  let fixture: ComponentFixture<FloornbathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloornbathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloornbathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
