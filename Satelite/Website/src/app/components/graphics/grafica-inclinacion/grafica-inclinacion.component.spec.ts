import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaInclinacionComponent } from './grafica-inclinacion.component';

describe('GraficaInclinacionComponent', () => {
  let component: GraficaInclinacionComponent;
  let fixture: ComponentFixture<GraficaInclinacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaInclinacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaInclinacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
