import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { LoginComponent } from './login/login.component';
import {AutorizzazioneComponent} from './autorizzazione/autorizzazione.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: 'tracks/:id', component: TrackComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full'},
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'login', component : LoginComponent},
  { path: 'authorized', component : AutorizzazioneComponent},
  { path: 'logout', component : LogoutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService]
})
export class AppRoutingModule { }
