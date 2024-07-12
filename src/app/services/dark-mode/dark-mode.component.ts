import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { moon, sunny } from 'ionicons/icons';


@Component({
  selector: 'dark-mode-toggle',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
  imports: [IonIcon, IonicModule, FormsModule],
  standalone: true,
})
export class DarkModeComponent {
  static initializeDarkPalette() {
    document.documentElement.classList.toggle(
      'ion-palette-dark',
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  constructor() {
  }

  isDarkModeEnabled: Boolean = false;
  DarkModeMsg: String = "";
  Icon: String = moon;

  ngOnInit(): void {
    this.initializeDarkPalette();
  }

  initializeDarkPalette(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkModeEnabled = prefersDark.matches;
    this.toggleDarkPalette(prefersDark.matches);
    prefersDark.addEventListener('change', (mediaQuery) => {
      this.isDarkModeEnabled = mediaQuery.matches;
      this.toggleDarkPalette(mediaQuery.matches);
    });
  }

  toggleChange(event: any): void {
    this.toggleDarkPalette(event.detail.checked);
  }

  toggleDarkPalette(shouldAdd: boolean): void {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
    // Contrario a lo intuitivo, ya que por algún motivo isDarkModeEnabled
    // es falso para este punto, aunque ya esté activado el modo oscuro
    this.DarkModeMsg = this.isDarkModeEnabled
      ? 'Dark mode enabled'
      : 'Dark mode disabled';
    this.Icon = this.isDarkModeEnabled ? moon : sunny;
  }
}
