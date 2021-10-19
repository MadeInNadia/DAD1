import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { ListComponent } from './views/list/list.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { SearchComponent } from './views/search/search.component';
const routes: Routes = [
{ path: 'list', component: ListComponent },
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: '/list', pathMatch:'full'},
{ path:'search', component:SearchComponent},
{ path:'contact', component:ContactComponent},
{ path:'perfil', component:PerfilComponent}
];
@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
