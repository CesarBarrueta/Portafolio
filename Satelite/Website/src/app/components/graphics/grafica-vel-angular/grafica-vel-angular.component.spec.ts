import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaVelAngularComponent } from './grafica-vel-angular.component';

describe('GraficaVelAngularComponent', () => {
  let component: GraficaVelAngularComponent;
  let fixture: ComponentFixture<GraficaVelAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaVelAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaVelAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
