import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorService } from '../services/autor/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit{

  autorForm: FormGroup;
  autor: any;

  constructor(
    public fb: FormBuilder,
    public autorService: AutorService
  ){}

  ngOnInit(): void {
      this.autorForm = this.fb.group({
        id: [''],
        autor:['',Validators.required]
      });;

      this.autorService.getAllAutores().subscribe(resp=>{
        this.autor = resp;
        // console.log(resp)
    },
    error=>{console.error(error)}
    )

  }

  guardar() : void {
    this.autorService.saveAutor(this.autorForm.value).subscribe(resp=>{
      this.autorForm.reset();
      this.autor=this.autor.filter((autor: { id: any; })=>resp.id!=autor.id)
      this.autor.push(resp)
    },
    error=>{console.error(error)}
    )
  }

  eliminar(autor: any){
    this.autorService.deleteAutor(autor.id).subscribe(resp=>{
      console.log(resp)
      if(resp === true){
        this.autor.pop(autor)
        window.location.reload()
      }
    },
    error=>{console.error(error)}  
    )
  }

  editar(autor : any){
    this.autorForm.setValue({
      id: autor.id,
      autor: autor.autor
    },
  
    )


  }







}
