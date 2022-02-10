import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Animais } from 'src/app/utils/types/animais';

import { TokenService } from '../autenticacao/token/token.service';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken()
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, { headers })
  }
}
