import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPresionComponent } from './grafica-presion.component';

describe('GraficaPresionComponent', () => {
  let component: GraficaPresionComponent;
  let fixture: ComponentFixture<GraficaPresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPresionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
