import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Asegúrate de que la ruta sea correcta

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proveer las rutas de la aplicación
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(ToastrModule.forRoot())
  ]
})
  .catch((err) => console.error(err));
