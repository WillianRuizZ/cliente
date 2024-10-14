import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-producto',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent implements OnInit {


  listaProductos: Producto[] = [];

  constructor(private _productoService: ProductoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.optenerProductos();
  }


  // Obtener productos
  optenerProductos() {
    this._productoService.getProductos().subscribe({
      next: (data) => {
        console.log(data); // Manejo de los datos recibidos
        this.listaProductos = data;
      },
      error: (error) => {
        console.log('Error:', error); // Manejo de errores
      },
      complete: () => {
        console.log('La emisión ha completado.'); // Manejo de la finalización (opcional)
      }
    });
  }

  eliminarProducto(id: any) {
    this._productoService.deleteProducto(id).subscribe({
      next: (data) => {
        this.toastr.error('El producto fue eliminado con exito', 'Eliminado');
        this.optenerProductos();
      },
      error: (error) => {
        console.log('Error:', error); // Manejo de errores
      },
      complete: () => {
        console.log('La emisión ha completado.'); // Manejo de la finalización (opcional)
      }
    });
  }


}
