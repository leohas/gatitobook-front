import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Comentario, Comentarios } from 'src/app/utils/types/comentarios';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private HttpClient: HttpClient) { }

  buscaComentario(id: number): Observable<Comentarios>{
    return this.HttpClient.get<Comentarios>(`${API}/photos/${id}/comments`)
  }

  incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.HttpClient.post<Comentario>(`${API}/photos/${id}/comments`, {commentText})
  }
}
