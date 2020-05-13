import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthorized : Boolean; // Creazione variabile É Autorizzato per le verifiche , --> false true
  constructor(private auth : AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.isAuthorized = this.auth.isTokenSet();
  }
  
  login()
  {
    this.auth.authorize(); // faccio il login
  }

}



