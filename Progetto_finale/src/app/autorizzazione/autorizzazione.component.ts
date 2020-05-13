import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizzazione',
  templateUrl: './autorizzazione.component.html',
  styleUrls: ['./autorizzazione.component.css']
})
export class AutorizzazioneComponent implements OnInit {

  isAuthorized : Boolean; // Creazione variabile É Autorizzato per le verifiche , --> false true
  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit(): void {
        this.isAuthorized = this.auth.isTokenSet(); //Verifica se sono già autorizzato
                                                // a seconda se e true o false , si puó vedere se é stato autorizzato

    let href = this.router.url; // Inserisce la ruoute dentro una variabile HREF
    console.log(href);

    //Se il componente viene richiamato dopo un'autorizzazione setto il token
    if (href.includes("authorized")) // Se dentro cé la parola authorized
    {
      let token =  href.split("#access_token=")[1]; // inserisco nella variabile token il token preso dal HREF
      console.log("token: " + token);
      this.auth.setToken(token);  // Setto il token
      this.router.navigate['/Login']; //Quando ho setatto il token vado sul search component 
      this.isAuthorized = true; // Variabile É Authorized messa in true
    }
    console.log(href);
  }

}
