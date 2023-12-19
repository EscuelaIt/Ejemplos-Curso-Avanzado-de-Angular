import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerStateSnapshot: RouterStateSnapshot): void {
    const currentTitle = this.buildTitle(routerStateSnapshot);
    if (currentTitle !== undefined) {
      this.title.setTitle(`MAP | ${currentTitle}`);
    }
  }

}
