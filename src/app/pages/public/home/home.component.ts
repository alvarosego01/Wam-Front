import { Component, OnInit } from '@angular/core';


import { UserService } from 'src/app/services/services.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    public _userService: UserService
  ) {

    _userService.prueba();

   }

  ngOnInit(): void {
  }

}
