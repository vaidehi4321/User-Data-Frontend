import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import {User} from '/Users/rashmi/AngularBasics/angularApp/src/app/user';
// import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
 
  user: User;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserServiceService) {
    this.user = new User();
  }
 
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/users']);
  }
}