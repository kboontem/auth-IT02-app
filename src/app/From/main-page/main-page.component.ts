import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  username = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.username = this.auth.getUsername();
  }
}