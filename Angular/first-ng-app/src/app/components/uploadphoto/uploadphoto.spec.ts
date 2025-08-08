import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadphoto } from './uploadphoto';

describe('Uploadphoto', () => {
  let component: Uploadphoto;
  let fixture: ComponentFixture<Uploadphoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uploadphoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadphoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
