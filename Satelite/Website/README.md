# Website
El proyecto fue generado con [Angular CLI](https://cli.angular.io/), version 13.3.6, instalado con el siguiente comando:
```[bash]
npm install -g @angular/cli
```

## Lista de dependencias
- [Angular](https://angular.io/) para el desarrollo de la aplicación.
- [ApexCharts](https://apexcharts.com/) para el manejo de gráficos.
- [ngx-socket-io](https://www.npmjs.com/package/ngx-socket-io) para el manejo de eventos en sockets
- [Karma](https://karma-runner.github.io/) para el desarrollo de las pruebas unitarias.

## Recuperación de las dependencias
Como cualquier proyecto basado en NodeJS, se debe recuperar las dependencias con el siguiente comando:

```[bash]
npm install
```

## Servidor de Desarrollo

Ejecute `ng serve`. Por defecto, el servidor se despliega en el puerto `4200`, asegurese de no estar ocupando el puerto. Para ver los resultados, navegue a `http://localhost:4200/`. Los cambios en el código se reflejarán en la página automáticamente mientras el servidor esté activo.

## Construir el Proyecto

Ejecute `ng build` para construir el proyecto. El resultado es una carpeta llamada `dist` que contiene el código compilado.
## Tests Unitarios

Ejecute `ng test` para ejecutar los test via [Karma](https://karma-runner.github.io).

## Necesidades
+ Graficas
    - Temperatura
    - Presion
    - Altura
    - Aceleracion
    - Velocidad angular
    - ? Inclinacion
+ Puerto de conexion
+ Boton de encendido/apagado
+ Exportar datos en formato CSV
+ Logos 
    - SAFI
    - UAEMEX
+ Resumen de vuelo

## Implicados
- Ivan
- Estefany
- Cesar
- Naarai