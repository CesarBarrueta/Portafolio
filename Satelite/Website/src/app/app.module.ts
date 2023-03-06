import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './components/graphics/grafica_temp/temperatura.component';
import { LineComponent } from './components/graphics/line/line.component';
import { GraficaPresionComponent } from './components/graphics/grafica-presion/grafica-presion.component';
import { GraficaAlturaComponent } from './components/graphics/grafica-altura/grafica-altura.component';
import { GraficaAceleracionComponent } from './components/graphics/grafica-aceleracion/grafica-aceleracion.component';
import { GraficaVelAngularComponent } from './components/graphics/grafica-vel-angular/grafica-vel-angular.component';
import { GraficaInclinacionComponent } from './components/graphics/grafica-inclinacion/grafica-inclinacion.component';
import { AsideComponent } from './components/aside/aside.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    TemperaturaComponent,
    GraficaPresionComponent,
    GraficaAlturaComponent,
    GraficaAceleracionComponent,
    GraficaVelAngularComponent,
    GraficaInclinacionComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
