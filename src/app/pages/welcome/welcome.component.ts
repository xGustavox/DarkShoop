import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  userName

  constructor
  (
    private router: Router,
    private userService: UserService
  ) 
  { 
    this.userName = userService.getUser().name
  }

  ngOnInit(): void {
  }

  GoShopping() {
    this.router.navigate(['terms-use'])
  }
}
