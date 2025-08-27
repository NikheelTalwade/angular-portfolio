import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchool } from './high-school';

describe('HighSchool', () => {
  let component: HighSchool;
  let fixture: ComponentFixture<HighSchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighSchool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighSchool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
