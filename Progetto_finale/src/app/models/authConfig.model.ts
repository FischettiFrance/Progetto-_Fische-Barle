import { SpotifyScope } from './spotifyScope.model';
 
export interface AuthConfig{ // Creazione classe AuthConfig 
    client_id: string;
    response_type: "token" | string;
    redirect_uri: string;
    state: string;
    show_dialog: boolean;
    scope: SpotifyScope[] | string;
}