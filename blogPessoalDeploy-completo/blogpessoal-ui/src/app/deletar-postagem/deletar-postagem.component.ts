import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-deletar-postagem',
  templateUrl: './deletar-postagem.component.html',
  styleUrls: ['./deletar-postagem.component.css']
})
export class DeletarPostagemComponent implements OnInit {

  postagem = new Postagem()
  delOk:boolean  = false

  constructor(private route: ActivatedRoute, private router:Router, private postagemService: PostagemService) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
      this.findById(id)
  }

  findById(id:number){
    this.postagemService.getByIdPostagens(id).subscribe((resp: Postagem)=>{
      this.postagem=resp
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  btnSim(){
    this.postagemService.delete(this.postagem.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/feed']);
      localStorage.setItem("delOk", this.delOk.toString())
  }, err => {
    console.log(err);
  });
  }

  btnNao(){
    this.router.navigate(['/feed']);
  }

}
