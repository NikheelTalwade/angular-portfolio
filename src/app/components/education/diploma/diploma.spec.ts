import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diploma } from './diploma';

describe('Diploma', () => {
  let component: Diploma;
  let fixture: ComponentFixture<Diploma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diploma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diploma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
