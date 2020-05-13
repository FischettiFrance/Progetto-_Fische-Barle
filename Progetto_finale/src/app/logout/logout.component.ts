import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isAuthorized : Boolean; // Creazione variabile É Autorizzato per le verifiche , --> false true
  constructor(private auth : AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.logout();
    this.isAuthorized = this.auth.isTokenSet(); 
    
    }

  logout()
  {
    this.auth.unsetToken();  // TOLGO IL TOKEN 
    this.isAuthorized = false; // VARIABILE É AUTORIZZATO MESSA IN FALSE 
  }
}
