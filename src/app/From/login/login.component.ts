import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Username = '';
  Password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.Username, this.Password).subscribe({
      next: res => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/main-page']);
      },
      error: () => alert('การเข้าสู่ระบบล้มเหลว')
    });
  }
}