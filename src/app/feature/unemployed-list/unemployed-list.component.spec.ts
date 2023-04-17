import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemployedListComponent } from './unemployed-list.component';

describe('UnemployedListComponent', () => {
  let component: UnemployedListComponent;
  let fixture: ComponentFixture<UnemployedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnemployedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnemployedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
