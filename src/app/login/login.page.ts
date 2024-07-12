import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { passwordValidator } from '../validators/password-validator';
import { AuthService } from '../auth/auth.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TitleService } from '../services/title/title.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPage {
  loginForm: FormGroup;
  title: string = 'Login';

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }

  constructor(private titleService: TitleService, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, passwordValidator()]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Handle the login logic here
      // console.log('Login with username:', username, 'and password:', password);
      this.authService.login(username, password);
    }
  }
}
