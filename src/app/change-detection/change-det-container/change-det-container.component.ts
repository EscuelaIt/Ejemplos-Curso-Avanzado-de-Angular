import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetPresenter1Component } from '../change-det-presenter1/change-det-presenter1.component';
import { ChangeDetPresenter2Component } from '../change-det-presenter2/change-det-presenter2.component';
import { Profile } from '../Profile';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { ChangeDetPresenter3Component } from '../change-det-presenter3/change-det-presenter3.component';
import { PERSONS, PERSONS2 } from '../data';
import { Person } from '../Person';
import { ChangeDetPresenter4Component } from '../change-det-presenter4/change-det-presenter4.component';

@Component({
  selector: 'app-change-det-container',
  standalone: true,
  imports: [
    CommonModule,
    ChangeDetPresenter1Component,
    ChangeDetPresenter2Component,
    ChangeDetPresenter3Component,
    ChangeDetPresenter4Component,
  ],
  templateUrl: './change-det-container.component.html',
  styles: ``,
})
export class ChangeDetContainerComponent {

  name = 'A Name';
  private reactiveValueSubject$ = new BehaviorSubject<string>('Default reactive value');
  public reactiveValue$ = this.reactiveValueSubject$.asObservable();

  personList: Person[] = PERSONS;
  personList2: Person[] = PERSONS2;

  profile: Profile = {
    name: 'Alberto',
    phone: 232323,
  };

  constructor(private zone: NgZone) {

  }

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
