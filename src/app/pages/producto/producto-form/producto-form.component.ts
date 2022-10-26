import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: any = {}

  constructor(
    private productoServ: ProductoService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.producto);

    this.productoServ.agregarProducto(this.producto).subscribe( (prod:any) => {
      console.log("producto creado", prod);
      if(prod.id != null) {
        // con es
        this.router.navigate(["/producto"]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        
      } else {
        // presentar mensaje de error

      }
    });


  }

}
