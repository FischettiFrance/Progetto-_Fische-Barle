import { Injectable } from '@angular/core';
import { AuthConfig } from './models/authConfig.model';
import { ScopesBuilder } from './models/spotifyScope.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})


export class AuthService { // Esporto la classe AuthService -->  Parametri da passare per fare il login
    token: string = "";
    requestAuthUrl = 'https://accounts.spotify.com/authorize';
    authConfig: AuthConfig = {
        client_id: "6df42a10ea4a4cfdab9bf107bd7e3fa4",  // WebPortal App Id --> ID personale
        response_type: "token", // In risposta ci da un toker
        redirect_uri: "https://4200-f945fed6-e3bd-4ccc-9f41-2edc9c2606b1.ws-eu01.gitpod.io/authorized",  // URL per effettuare la richiesta
        state: "",
        show_dialog: true,
        scope: new ScopesBuilder().withScopes(ScopesBuilder.LIBRARY).build()
    };

    constructor(private http: HttpClient) { }

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

    isTokenSet(): Boolean {
        if (this.token.includes("Bearer")) return true; // se é autoirzzato restitusice true
        else return false; // Restituisce false se non é autorizzato
    }

    //Questa parte la prendiamo così dalla libreria
    // Non ho capito questoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
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
    // fino a quiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

}
