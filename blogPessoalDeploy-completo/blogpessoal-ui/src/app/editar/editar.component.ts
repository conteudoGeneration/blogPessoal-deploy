import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  postagem: Postagem = new Postagem

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }

  salvar(){
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.router.navigate(['/feed'])
      location.assign('/feed')
    })
  }

}
