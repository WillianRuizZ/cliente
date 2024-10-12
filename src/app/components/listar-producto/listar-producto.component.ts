import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-listar-producto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule,BrowserAnimationsModule, ToastrModule],
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent {

}
