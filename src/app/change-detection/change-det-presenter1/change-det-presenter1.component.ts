import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../Profile';
import { Observable, delay, from, of, tap  } from 'rxjs';

@Component({
  selector: 'app-change-det-presenter1',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h1>Presenter1</h1>
    <div>
      <h2>
        Reactive value
      </h2>
      <em>Value: {{ reactiveValue$ | async }}</em>
    </div>


    <em>Objeto profile {{ profile | json }}</em>
    <p>name is: {{ name }}</p>
    <p>
      <span [class.hidden]="hidden">Me han notificado cambios desde el onChange</span>
    </p>
  `,
  styles: ``
})
export class ChangeDetPresenter1Component implements OnChanges, OnInit {

  @Input({ required: true }) profile!: Profile;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) reactiveValue$!: Observable<string>;

  myObserv$ = from(this.getData())

  hidden = true;


  ngOnInit(): void {
    this.reactiveValue$.pipe(tap(value => console.log(`This is the new value: ${value}`))).subscribe();

    // Esta linea provoca un evento 
    this.myObserv$.pipe(delay(5000), tap(v => console.log(v))).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['profile'].firstChange) {
      this.hidden = false;
    }
  }

  private async getData(): Promise<any> {
    const result = await fetch('https://rickandmortyapi.com/api/character/2', {
      method: 'GET'
    });

    return result.json()
  }
}
