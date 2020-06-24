import { UserLogin } from './../model/UserLogin';
import { User } from './../model/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('http://192.168.0.14:9000/usuarios/logar', userLogin);
  }

  cadastrar(user: User) {
    return this.http.post('http://192.168.0.14:9000/usuarios/cadastrar', user);
  }

  btnSair() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token != null) {
      ok = true;
    }
    return ok;
  }

  btnLogin() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token == null) {
      ok = true;
    }
    return ok;
  }

}
