import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  getAllPostagens() {
    return this.http.get('http://192.168.0.14:9000/postagens', this.token);
  }

  getByIdPostagens(id: number) {
    return this.http.get(`http://192.168.0.14:9000/postagens/${id}`, this.token);
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://192.168.0.14:9000/postagens', postagem, this.token );
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('http://192.168.0.14:9000/postagens', postagem, this.token );
  }

  delete(id: number) {
    return this.http.delete(`http://192.168.0.14:9000/postagens/${id}`, this.token);
  }

  findByTitulo(titulo: string) {
    return this.http.get(`http://192.168.0.14:9000/postagens/titulo/${titulo}`, this.token);
  }

}
