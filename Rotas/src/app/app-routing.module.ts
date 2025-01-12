import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

const routes: Routes = [
  {path: 'home/:nome', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'pageNotFound', component: PageNotfoundComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: PageNotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
