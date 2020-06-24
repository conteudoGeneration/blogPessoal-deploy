import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletarPostagemComponent } from './deletar-postagem/deletar-postagem.component';


const routes: Routes = [

  { path:'', redirectTo:'home', pathMatch:  'full' },
  { path:'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'editar/:id', component: PutPostagemComponent },
  { path: 'delete/:id', component: DeletarPostagemComponent },
  { path: 'lista-post', component: ListaPostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
