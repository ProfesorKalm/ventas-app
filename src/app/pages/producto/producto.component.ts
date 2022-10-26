import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: any[] = [];

  constructor(private productoServ: ProductoService) { 
    this.getAllProductos();

  }

  ngOnInit(): void {
  }

  getAllProductos() {
    this.productoServ.getAllProductos().subscribe( (products:any) => {      
      this.productos = products;
    });
  }

  eliminar(id:number) {

    this.productoServ.eliminarProductoById(id).subscribe( (prodDelete:any) => {
      if(prodDelete.id != null) {
        Swal.fire(
          'Eliminado!',
          'Se elimino correctamentl el producto ' +  prodDelete.nombre ,
          'success'
        );             
        this.getAllProductos();
      } else {
        console.log("error")
      }
    });

    Swal.fire({
      title: '¿Desea eliminar el registro?',
      text: "Es cambio es irreversible",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {        
         // elije confirmar
        
                
      }
    })
  }

}
