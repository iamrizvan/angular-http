import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "./user.service";
import { User } from './user';
import { Address } from './address';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  users : User[];
  addresses : Address[];
  constructor(private _weather: UserService) {}

  ngOnInit() {
   this.subscription =  this._weather.getUsers().subscribe(res => 
      {
        this.users = res
      }
    );
  }
  
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
