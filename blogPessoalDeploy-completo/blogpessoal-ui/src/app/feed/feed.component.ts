import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  nome: string = localStorage.getItem('nome');
  // Ordenação de postagens
  key = 'data';
  reverse = true;

  // GetAll
  listaPostagens: Postagem[];

  postagem: Postagem = new Postagem;
  id: number;

  // Post
  novo = false;
  titulo: string;
  pesquisa: boolean = false
  alerta = false;

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private locationPage: Location
    ) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if (token == null) {
      alert('Faça o login antes de acessar a página feed');
      this.router.navigate(['/login']);
    }

    this.findAllPostagens();

    if (localStorage.getItem('delOk') == 'true') {

      this.alerta = true;
      localStorage.clear();
      setTimeout(() => {
        this.refresh();
      }, 2000);

    }

    var id: number = this.route.snapshot.params["id"];
    if (this.id == undefined) {
      console.log('Não preciso do ID agora!');
    } else {
      this.findById(id);
    }

  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findById(id: number) {
    this.postagemService.getByIdPostagens(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    }, err => {
      console.log( 'Não preciso do ID para nada agora.' );
    });
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.refresh();
    });
  }


  findByNamePostagem() {
    this.postagemService.findByTitulo(this.titulo).subscribe((resp: Postagem[]) => {
      console.log(resp);
      this.listaPostagens = resp;
      this.pesquisa = true;
    }, err => {
      console.log(err);
    });
  }

  fecharAlert() {
    localStorage.clear();

  }

  refresh(){

    this.router.navigateByUrl('/lista-post', {skipLocationChange: true})
    .then(()=>{
      this.router.navigate([this.locationPage.path()])
    });
  }


}
