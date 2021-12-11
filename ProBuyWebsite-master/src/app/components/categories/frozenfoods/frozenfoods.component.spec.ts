import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenfoodsComponent } from './frozenfoods.component';

describe('FrozenfoodsComponent', () => {
  let component: FrozenfoodsComponent;
  let fixture: ComponentFixture<FrozenfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrozenfoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
