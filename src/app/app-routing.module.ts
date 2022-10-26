import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProductoFormComponent } from './pages/producto/producto-form/producto-form.component';
import { ProductoComponent } from './pages/producto/producto.component';

// las rutas de nuestra aplicacion
const routes: Routes = [
  {path: 'producto', component: ProductoComponent},
  {path: 'producto/form', component: ProductoFormComponent},
  {path: 'cliente', component: ClienteComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
