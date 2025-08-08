import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photopage } from './photopage';

describe('Photopage', () => {
  let component: Photopage;
  let fixture: ComponentFixture<Photopage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photopage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Photopage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
