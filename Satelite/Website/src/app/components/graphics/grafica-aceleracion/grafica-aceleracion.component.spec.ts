import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAceleracionComponent } from './grafica-aceleracion.component';

describe('GraficaAceleracionComponent', () => {
  let component: GraficaAceleracionComponent;
  let fixture: ComponentFixture<GraficaAceleracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaAceleracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaAceleracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
