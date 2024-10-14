import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr'; // Importa el servicio Toastr
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null; // Cambié a string | null para reflejar que puede ser nulo

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private activateRoute: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
    this.id = this.activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.esEditar(); // Llama al método esEditar en ngOnInit
  }

  agregarProducto() {
    console.log(this.productoForm.value);
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    };

    if (this.id !== null) {
      //editamos
      this._productoService.updateProduct(this.id, PRODUCTO).subscribe({
        next: (data) => {
          this.toastr.info('El producto fue actualizado con exito', 'Actualizado');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      })
    } else {
      //Agregamos
      console.log(PRODUCTO);

      this._productoService.createProduct(PRODUCTO).subscribe({
        next: (data) => {
          this.toastr.success('Producto registrado correctamente!', 'Éxito');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      });
    }

  }
  // Método para editar producto
  esEditar() {
    if (this.id) { // Comprueba que id no sea nulo
      this.titulo = 'Editar Producto';
      this._productoService.getProductoId(this.id).subscribe({
        next: (data) => {
          this.productoForm.setValue({
            producto: data.nombre,
            categoria: data.categoria,
            ubicacion: data.ubicacion,
            precio: data.precio
          });
        },
        error: (error) => {
          console.error('Error al obtener el producto:', error);
          this.router.navigate(['/']); // Redirige si hay un error
        }
      });
    }
  }
}
