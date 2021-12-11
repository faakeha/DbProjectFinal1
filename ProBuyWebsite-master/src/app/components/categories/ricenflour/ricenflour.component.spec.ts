import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicenflourComponent } from './ricenflour.component';

describe('RicenflourComponent', () => {
  let component: RicenflourComponent;
  let fixture: ComponentFixture<RicenflourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicenflourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicenflourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
