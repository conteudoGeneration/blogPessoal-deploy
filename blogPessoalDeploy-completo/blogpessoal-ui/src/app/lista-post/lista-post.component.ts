import { Postagem } from './../model/Postagem';
import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  key = 'data';
  reverse = true;
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findAllPostagens();
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

}
