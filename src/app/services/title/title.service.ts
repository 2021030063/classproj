import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private baseTitle: string = 'IonicApp';
  currentPageTitle: string = '';

  constructor(private titleService: Title) {}

  setTitle(title: string): void {
    this.currentPageTitle = title;
    this.titleService.setTitle(`${this.baseTitle} | ${title}`);
  }

  resetTitle(): void {
    this.titleService.setTitle(this.baseTitle);
  }

  getCurrentPageTitle(): string {
    return this.currentPageTitle;
  }
}
