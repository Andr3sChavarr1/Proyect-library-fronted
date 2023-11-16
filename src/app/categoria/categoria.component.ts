import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../services/categoria/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  categoriaForm: FormGroup;
  categoria: any;

  constructor(
    public fb: FormBuilder,
    public categoriaService: CategoriaService

  ) { }

  ngOnInit(): void {
      this.categoriaForm = this.fb.group({

        id: [''],
        categoria: ['',Validators.required]

      });;

      this.categoriaService.getAllCategoria().subscribe(resp =>{
        this.categoria = resp;
        // console.log(resp)
      },
      error=>{console.error(error)}
      )
  }

  guardar() : void {
    this.categoriaService.saveCategoria(this.categoriaForm.value).subscribe(resp=>{
      this.categoriaForm.reset();
      this.categoria=this.categoria.filter((categoria: { id: any; })=>resp.id!=categoria.id)
      this.categoria.push(resp);
    },
    error=>{console.error(error)}                               
    )
  }

  eliminar(categoria: any){
    this.categoriaService.deleteCategoria(categoria.id).subscribe(resp=>{
      console.log(resp)
      if(resp === true){
        this.categoria.pop(categoria)
        window.location.reload()
      }
    },
    error=>{console.error(error)}   
    )

  }

  editar(categoria: any){
    this.categoriaForm.setValue({
      id: categoria.id,
      categoria : categoria.titulo
    })

  }



}
