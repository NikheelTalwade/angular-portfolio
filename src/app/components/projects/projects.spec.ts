import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROJECTS } from './projects';

describe('PROJECTS', () => {
  let component: PROJECTS;
  let fixture: ComponentFixture<PROJECTS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PROJECTS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PROJECTS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
