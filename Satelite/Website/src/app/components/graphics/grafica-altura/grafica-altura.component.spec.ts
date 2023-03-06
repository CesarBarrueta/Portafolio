import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAlturaComponent } from './grafica-altura.component';

describe('GraficaAlturaComponent', () => {
  let component: GraficaAlturaComponent;
  let fixture: ComponentFixture<GraficaAlturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaAlturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaAlturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
