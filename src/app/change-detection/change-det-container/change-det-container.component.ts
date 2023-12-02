import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetPresenter1Component } from '../change-det-presenter1/change-det-presenter1.component';
import { ChangeDetPresenter2Component } from '../change-det-presenter2/change-det-presenter2.component';
import { Profile } from '../Profile';
import { BehaviorSubject, Subject } from 'rxjs';
import { ChangeDetPresenter3Component } from '../change-det-presenter3/change-det-presenter3.component';

@Component({
  selector: 'app-change-det-container',
  standalone: true,
  imports: [CommonModule, ChangeDetPresenter1Component, ChangeDetPresenter2Component, ChangeDetPresenter3Component],
  templateUrl: './change-det-container.component.html',
  styles: ``
})
export class ChangeDetContainerComponent {
  name = 'A Name';
  reactiveValue$ = new BehaviorSubject<string>('Default reactive value');

  profile: Profile = {
    name: 'Alberto',
    phone: 232323,
  };

  changeProfileValue() {
    this.profile.name = 'EEEE';
    this.profile.phone = 232;
  }

  changeReactiveValue() {
    this.reactiveValue$.next('Other reactive name')
  }

  changeProfileValueOtherOption() {
    this.profile = {...this.profile}
  }


}


