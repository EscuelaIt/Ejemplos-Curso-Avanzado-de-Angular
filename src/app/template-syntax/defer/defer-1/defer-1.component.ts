import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferedContent1Component } from './defered-content-1/defered-content-1.component';
import { DeferedContentWithErrorComponent } from './defered-content-with-error/defered-content-with-error.component';

@Component({
  selector: 'app-defer-1',
  standalone: true,
  imports: [CommonModule, DeferedContent1Component, DeferedContentWithErrorComponent],
  template: `
    
    <h1>Vistas diferibles</h1>
    <div class="margin-b-10">
      <div class="margin-b-10">
        <h2>Ejemplo 1 - Carga defecto</h2>
        <p>El contenido cargado perezosamente se mostrará en el <b>cuadro verde</b> cuando el navegador cargue el contenido principal</p>
        <em>Para probar el ejemplo, limitar la red a 3g rapido o 3g lento para visualizar el ejemplo correctamente</em>
      </div>
      <div>
        <div>
          Contenido sin carga perezosa
        </div>
        <div class="bg-color-green min-h-2em">
          @defer {
            <app-defered-content-1/>
          }
        </div>
      </div>
    </div>

    <div class="margin-b-10">
      <div class="margin-b-10">
        <h2>Ejemplo 2 - Con bloque &#64;placeholder</h2>
        <p>El contenido cargado perezosamente se mostrará en el <b>cuadro verde</b> al pasar 5 segundos. 5 segundos es el tiempo mínimo que se mostrará el contenido del bloque <b>placeholder</b> y después cambiará al contenido final</p>
        
      </div>
      <div>
        <div>
          Contenido sin carga perezosa
        </div>
        <div class="bg-color-green min-h-2em">
          @defer {
            <app-defered-content-1/>
          } @placeholder (minimum 5000ms) {
            <p>Marcador mostrado durante 5 segundo</p>
          }
        </div>
      </div>
    </div>

    <div class="margin-b-10">
      <div class="margin-b-10">
        <h2>Ejemplo 3 - Con bloque &#64;loading</h2>
        <p>El contenido cargado perezosamente se mostrará en el <b>cuadro verde</b> pasado 5s si su carga diferida demoró mas de 100ms sino se muestra al cargarse normalmente</p>
        <p>usamos dos parametros opcionales en el bloque &#64;loading, after y minimun</p>
        <p><b>after:</b> usado como el tiempo a partir del cual el loader se podrá mostrar si no se ha cargado el defer</p>
        <p><b>minimum:</b> tiempo minimo que se mostrara el bloque &#64;loading si ha llegado a cargarse</p>
        <em>Para probar el ejemplo probarlo con la red limitada y sin limitar</em>
      </div>
      <div>
        <div>
          Contenido sin carga perezosa
        </div>
        <div class="bg-color-green min-h-2em">
          @defer {
            <app-defered-content-1/>
          } @loading (after 100ms; minimum 5s) {
            <p>Loader mostrado durante 5 segundo</p>
            <img style="width: 2em;" alt="loading..." src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" />
          }
        </div>
      </div>
    </div>

    <div class="margin-b-10">
      <div class="margin-b-10">
        <h2>Ejemplo 4 - Con bloque &#64;error</h2>
        <p>Si el contenido cargado perezosamente falla se muestra el del bloque error de forma inmediata</p>
        <em>Para probar el ejemplo probarlo con la red limitada y sin limitar</em>
      </div>
      <div>
        <div>
          Contenido con error
        </div>
        <div class="bg-color-green min-h-2em">
          @defer {
            <app-defered-content-with-error/>
          } @error {
            <p>Falló la carga del componente</p>
          }
        </div>
      </div>
    </div>
    
  `,
  styles: ``
})
export class Defer1Component implements OnInit {

  ngOnInit(): void {
    
  }

}
