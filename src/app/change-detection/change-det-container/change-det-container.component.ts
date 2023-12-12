import { ChangeDetectionStrategy, Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetPresenter1Component } from '../change-det-presenter1/change-det-presenter1.component';
import { ChangeDetPresenter2Component } from '../change-det-presenter2/change-det-presenter2.component';
import { Profile } from '../Profile';
import { BehaviorSubject, Subject, map, of } from 'rxjs';
import { ChangeDetPresenter3Component } from '../change-det-presenter3/change-det-presenter3.component';
import { PERSONS, PERSONS2 } from '../data';
import { Person } from '../Person';
import { ChangeDetPresenter4Component } from '../change-det-presenter4/change-det-presenter4.component';
import { FormsModule } from '@angular/forms';
import { ChangeDetSearchInputComponent } from '../change-det-search-input/change-det-search-input.component';
import { ExampleSignalComponent } from '../example-signal/example-signal.component';

@Component({
  selector: 'app-change-det-container',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ChangeDetPresenter1Component,
    ChangeDetPresenter2Component,
    ChangeDetPresenter3Component,
    ChangeDetPresenter4Component,
    ChangeDetSearchInputComponent,
    ExampleSignalComponent
  ],
  templateUrl: './change-det-container.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetContainerComponent implements OnInit {
  
  name = 'A Name';
  nameComponente2 = 'Componente 2';

  profile: Profile = {
    name: 'Alberto',
    phone: 232323,
  };


  private reactiveValueSubject$ = new BehaviorSubject<string>(
    'Default reactive value'
  );
  public reactiveValue$ = this.reactiveValueSubject$.asObservable();

  personList: Person[] = PERSONS;
  personList2: Person[] = PERSONS2;

  
  filterPersonName = '';
  filterPersonNameOptimized = '';

  private filterPersonNameOptimizedV2BehSub = new BehaviorSubject('');
  filterPersonNameOptimizedV2$ = this.filterPersonNameOptimizedV2BehSub.asObservable();

  private personDataSub = new BehaviorSubject<Person[]>(this.personList2);
  personData$ = this.personDataSub.asObservable();

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.filterPersonNameOptimizedV2$.pipe(
      map(value => value.toLowerCase().trimEnd().trimStart())
    ).subscribe(filterValue => {
      if (filterValue !== '') {
        const dataValues = this.personList2.filter(dataValue => (dataValue.name).toLowerCase().includes(filterValue));
        this.personDataSub.next(dataValues);
      } else this.personDataSub.next(this.personList2);
    })
  }

  emitirValorSalidaPresenter2(value: string) {
    this.profile.name = value;
  }

  addFilterPersonNameValueEvent(value: string): void {
    // For normal data
    // this.filterPersonNameOptimized = value;

    // For observable data
    if (value) {
      this.filterPersonNameOptimizedV2BehSub.next(value);
    } else this.filterPersonNameOptimizedV2BehSub.next('');
  }

  getFilterPersonNameWithGoodPerformance() {
    return this.filterPersonNameOptimized.trimStart().trimEnd();
  }

  getPersonListOptimized(): Person[] {
    if (this.getFilterPersonNameWithGoodPerformance() !== '') {
      return this.personList2.filter(person => (person.name).toLowerCase().includes(this.getFilterPersonNameWithGoodPerformance().toLowerCase()))
    } else return this.personList2;
  }

  getFilterPersonNameWithBadPerformance() {
    return this.filterPersonName.trimStart().trimEnd();
  }

  addNewPerson() {
    this.personList2.push({
      name: 'Alberto',
      daysWorked: 20,
    });
  }

  private setIntervalsEachFiveSeconds() {
    const interval: number = setInterval(() => {
      console.log('en intervalo de 5seg');
    }, 5000) as unknown as number;

    setTimeout(
      (inter: number) => {
        clearInterval(inter);
      },
      25000,
      interval
    );
  }

  changeProfileValue() {
    this.profile.name = 'EEEE';
    this.profile.phone = 232;
  }

  changeNamePresenter1Value() {
    this.name = 'B Name'
  }

  changeReactiveValue() {
    this.reactiveValueSubject$.next('Other reactive name');
  }

  changeProfileValueOtherOption() {
    this.profile = { ...this.profile };
  }

  launchIntervalIntoZone() {
    this.setIntervalsEachFiveSeconds();
  }

  launchIntervalOutsideZone() {
    this.zone.runOutsideAngular(() => {
      this.setIntervalsEachFiveSeconds();
    });
  }
}
