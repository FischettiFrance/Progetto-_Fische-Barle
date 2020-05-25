import { Injectable } from '@angular/core';
import { AuthConfig } from './models/authConfig.model';
import { ScopesBuilder } from './models/spotifyScope.model'
import { HttpClient } from '@angular/common/http';
import { JwtHelperService,JwtModule } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})


export class AuthService { // Esporto la classe AuthService -->  Parametri da passare per fare il login
    token: string = "";
    requestAuthUrl = 'https://accounts.spotify.com/authorize';
    authConfig: AuthConfig = {
        client_id: "f2e39a765a4e4b2c83cef0eace1ab668",  // WebPortal App Id --> ID personale
        response_type: "token", // In risposta ci da un toker
        redirect_uri: "https://4200-c12b9512-402d-4842-9650-963d6295f34a.ws-eu01.gitpod.io/authorized",  // URL per effettuare la richiesta
        state: "",
        show_dialog: true,
        scope: new ScopesBuilder().withScopes(ScopesBuilder.LIBRARY).build()
    };

    constructor(private http: HttpClient,public jwtHelper: JwtHelperService) { }
    
    public authorize() // Creazione metodo authorize
    {
        const url = this.buildAuthUrl();
        console.log("url:" + url);
        //Le api di spotify non accettano XMLHttpRequest per ottenere token.
        //Faccio una richiesta standard
        window.location.href = this.buildAuthUrl();
    }

    public setToken(token: string) {
        this.token = "Bearer " + token;
        console.log("token settato");
    }

    public unsetToken() {
        this.token = "";
        console.log("token un-settato");
    }

    public getToken() {
        console.log("token richiesto");
        return this.token;

    }
    //Prova con router GUARD   
   /* public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
    }
    */

    isTokenSet(): Boolean {
        if (this.token.includes("Bearer")) return true; // se é autoirzzato restitusice true
        else return false // Restituisce false se non é autorizzato
                                                                 
    }

    //Questa parte la prendiamo così dalla libreria

    private buildAuthUrl(): string {

        let params = [];
        for (const [key, value] of Object.entries(this.authConfig)) {
            if (typeof (value) == 'object') {
                params.push(`${key}=${(value as string[]).join(" ")}`);
            } else {
                params.push(`${key}=${value}`);
            }
        }

        return `${this.requestAuthUrl}?${params.join('&')}`;
    }

}
