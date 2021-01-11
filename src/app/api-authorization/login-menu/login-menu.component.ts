import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  //@Output() onChanged = new EventEmitter<Observable<boolean>>();
  constructor(private authorizeService: AuthorizeService) {    
  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    //this.isAuthenticated.subscribe(value => this.onChanged.emit(value));
    //this.onChanged.emit(this.isAuthenticated);
  }
}
