import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterpage } from './counterpage';

describe('Counterpage', () => {
  let component: Counterpage;
  let fixture: ComponentFixture<Counterpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counterpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counterpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
