import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  Username = '';
  Password = '';
  ConfirmPassword = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (this.Password !== this.ConfirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    this.auth.register(this.Username, this.Password, this.ConfirmPassword).subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => alert(err.error)
    });
  }
}