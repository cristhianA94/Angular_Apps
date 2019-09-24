import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  //Guarda los usuarios recolectados
  users: any[] = [];

  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(
        (data) => { //sucess
          this.users = data['results'];
          console.log(data);
          
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
