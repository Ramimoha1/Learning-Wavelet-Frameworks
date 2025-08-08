import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Displayphoto } from './displayphoto';

describe('Displayphoto', () => {
  let component: Displayphoto;
  let fixture: ComponentFixture<Displayphoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Displayphoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Displayphoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
