import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../Profile';
import { Observable, delay, from, of, tap } from 'rxjs';

@Component({
  selector: 'app-change-det-presenter1',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div class="bg-color-green">
      <h1>Ejemplo Presenter1</h1>
      <div
        style="width: 20em;  background-color: blueviolet; color: azure;"
        (mouseover)="onMouseOver()"
      >
        <p>
          Si pasamos por encima se provoca un onMouseOverEvent dentro d ela zona de deteccion de cambios
        </p>
      </div>

      <div id="saveMouseArea"
        style="width: 20em;  background-color: crimson;"
      >
        <p>
          Si pasamos por encima se provoca un onMouseOverEvent fuera de la zona de deteccion de cambios
        </p>
      </div>

      <div>
        <em>
          <h3>Reactive value</h3>
          Value: {{ reactiveValue$ | async }}
        </em>
      </div>

      <em>Objeto profile {{ profile | json }}</em>
      <p>name is: {{ name }}</p>
      <p>
        <span [class.hidden]="hidden"
          >Me han notificado cambios desde el onChange</span
        >
      </p>
    </div>
  `,
  styles: ``,
})
export class ChangeDetPresenter1Component implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input({ required: true }) profile!: Profile;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) reactiveValue$!: Observable<string>;

  myObserv$ = from(this.getData());
  hidden = true;

  private mouseoverListener!: () => void;

  constructor(private zone: NgZone, private elRef: ElementRef) {}
  
  ngAfterViewInit(): void {
    const mouseArea = this.elRef.nativeElement.querySelector('#saveMouseArea');
    this.zone.runOutsideAngular(() => {
      this.mouseoverListener = this.onMouseOver.bind(this);
      mouseArea.addEventListener('mouseover', this.mouseoverListener);
    });
  }

  ngOnDestroy(): void {
    if (this.mouseoverListener) {
      const mouseArea = this.elRef.nativeElement.querySelector('#saveMouseArea');
      mouseArea.removeEventListener('mouseover', this.mouseoverListener);
    }
  }

  ngOnInit(): void {
    this.reactiveValue$
      .pipe(tap((value) => console.log(`This is the new value: ${value}`)))
      .subscribe();
    /**
     * Esta linea provoca un evento que dispara
     * la deteccion de cambios en todos los
     * elementos padres e hijos de padres que
     * tengan la estrategia por defecto
     */
    this.myObserv$
      .pipe(
        delay(5000),
        tap((v) => console.log(v))
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['profile'].firstChange) {
      this.hidden = false;
    }
  }

  private async getData(): Promise<any> {
    const result = await fetch('https://rickandmortyapi.com/api/character/2', {
      method: 'GET',
    });

    return result.json();
  }

  onMouseOver() {
    console.log('Lanzado evento on MouseHover');
  }
}
