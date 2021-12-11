import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilngheeComponent } from './oilnghee.component';

describe('OilngheeComponent', () => {
  let component: OilngheeComponent;
  let fixture: ComponentFixture<OilngheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilngheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OilngheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
