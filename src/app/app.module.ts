import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LibrosComponent } from './libros/libros.component';
import { AutorComponent } from './autor/autor.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditorialComponent } from './editorial/editorial.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    LibrosComponent,
    AutorComponent,
    CategoriaComponent,
    EditorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
