import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintToolbarComponent } from './print-toolbar.component';

describe('PrintToolbarComponent', () => {
  let component: PrintToolbarComponent;
  let fixture: ComponentFixture<PrintToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
