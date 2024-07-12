import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DarkModeComponent } from '../services/dark-mode/dark-mode.component';
import { AppFooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { IconsModule } from './icons.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    DarkModeComponent,
    AppFooterComponent,
    HeaderComponent,
    IconsModule,
  ],
  exports: [
    AppFooterComponent,
    HeaderComponent,
    IconsModule,
    RouterModule,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {
    DarkModeComponent.initializeDarkPalette();
  }
}
