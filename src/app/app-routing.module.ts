import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { AutorComponent } from './autor/autor.component';
import { EditorialComponent } from './editorial/editorial.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path: '', redirectTo: 'libros', pathMatch: 'full'},
  {path: 'libros', component: LibrosComponent},
  {path: 'autor', component: AutorComponent},
  {path: 'editorial', component: EditorialComponent},
  {path: 'categoria', component: CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
