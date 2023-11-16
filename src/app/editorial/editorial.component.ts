import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditorialService} from '../services/editorial/editorial.service'

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit{

  editorialForm: FormGroup;
  editorial: any;

  constructor(
    public fb: FormBuilder,
    public editorialService: EditorialService

  ) { }

  ngOnInit(): void {
      this.editorialForm = this.fb.group({
        id : [''],
        editorial: ['', Validators.required]
      });;

      this.editorialService.getAllEditorial().subscribe(resp =>{
        this.editorial = resp;
        // console.log(resp)
      },
      error=>{console.error(error)}
      )
  }

  guardar() : void {
    this.editorialService.saveEditorial(this.editorialForm.value).subscribe(resp=>{
      this.editorialForm.reset();
      this.editorial=this.editorial.filter((editorial: { id: any; })=>resp.id!=editorial.id)
      this.editorial.push(resp);
    },
    error=>{console.error(error)}                               
    )

  }

  eliminar(editorial: any){
    this.editorialService.deleteEditorial(editorial.id).subscribe(resp=>{
      console.log(resp)
      if(resp === true){
        this.editorial.pop(editorial)
        window.location.reload()
      }
    },
    error=>{console.error(error)}   
    )
  }

  editar(editorial: any){
    this.editorialForm.setValue({

      id: editorial.id,
      editorial: editorial.editorial
      
    })

  }




}
