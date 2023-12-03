import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetPresenter1Component } from '../change-det-presenter1/change-det-presenter1.component';
import { ChangeDetPresenter2Component } from '../change-det-presenter2/change-det-presenter2.component';
import { Profile } from '../Profile';
import { BehaviorSubject, Subject } from 'rxjs';
import { ChangeDetPresenter3Component } from '../change-det-presenter3/change-det-presenter3.component';
import { PERSONS, PERSONS2 } from '../change-det-presenter3/data';
import { Person } from '../change-det-presenter3/Person';

@Component({
  selector: 'app-change-det-container',
  standalone: true,
  imports: [
    CommonModule,
    ChangeDetPresenter1Component,
    ChangeDetPresenter2Component,
    ChangeDetPresenter3Component,
  ],
  templateUrl: './change-det-container.component.html',
  styles: ``,
})
export class ChangeDetContainerComponent {
  
  name = 'A Name';
  reactiveValue$ = new BehaviorSubject<string>('Default reactive value');
  personList: Person[] = PERSONS2;

  profile: Profile = {
    name: 'Alberto',
    phone: 232323,
  };

  constructor(private zone: NgZone) {}

  addNewPerson() {
    this.personList.push({
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

  changeReactiveValue() {
    this.reactiveValue$.next('Other reactive name');
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
