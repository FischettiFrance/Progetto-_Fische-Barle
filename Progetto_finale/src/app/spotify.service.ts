import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient, private auth : AuthService ) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({Authorization: this.auth.getToken()});
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }

  /*getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
    return this.http.get(url, { headers });
  }*/
  getTrack(id: string) {
    return this.requestAPI(id, "tracks");
  }

  getAlbum(id: string) {
    return this.requestAPI(id, "albums");
  }

  getArtist(id: string) {
    return this.requestAPI(id, "artists");
  }

  requestAPI(id: string, searchType: string){
    const url = `https://api.spotify.com/v1/${searchType}/${id}`;
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });

    return this.http.get(url, { headers });
  }
}
