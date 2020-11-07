import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { NavegacionComponent } from './vistas/navegacion/navegacion.component';

import { LibrosService } from './servicios/libros.service';

//para notificaciones al usuario pero no funciono, creo que por la version. 
/*import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';*/
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Importando Firebase
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
    //ToastModule.forRoot()
  ],
  providers: [LibrosService/*, ToastsManager*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
