import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graduation } from './graduation';

describe('Graduation', () => {
  let component: Graduation;
  let fixture: ComponentFixture<Graduation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graduation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graduation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
