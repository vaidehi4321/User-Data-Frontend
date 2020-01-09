import { Component, OnInit } from '@angular/core';
import {User} from '/Users/rashmi/AngularBasics/angularApp/src/app/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[];
  constructor(private userServiceService: UserServiceService) { }

  ngOnInit() {
    this.userServiceService.findAll().subscribe(data => {
      this.user = data;
      console.log(this.user);
  });

}
}