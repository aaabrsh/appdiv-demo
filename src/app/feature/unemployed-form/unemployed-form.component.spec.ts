import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemployedFormComponent } from './unemployed-form.component';

describe('UnemployedFormComponent', () => {
  let component: UnemployedFormComponent;
  let fixture: ComponentFixture<UnemployedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnemployedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnemployedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
