import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr'; // Importa el servicio Toastr

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'] // Asegúrate de usar "styleUrls" en plural
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService // Añade el servicio Toastr aquí
  ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  agregarProducto() {
    console.log(this.productoForm.value);
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    };

    console.log(PRODUCTO);

    // Muestra el mensaje de éxito con Toastr
    this.toastr.success('Producto registrado correctamente!', 'Éxito');

    // Redirige a la raíz
    this.router.navigate(['/']);
  }

}
