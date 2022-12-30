import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  formulario: FormGroup;
  public isEnviarDatos: boolean = false;
  constructor(private fb: FormBuilder) {
    this.crearFomrulario();
  }

  crearFomrulario() {
    this.formulario = this.fb.group({
      nombres: ['', [Validators.required]],
      dni: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      categoria: ['', [Validators.required]],
      comentario: ['', [Validators.required]],
    });
  }

  enviarDatos() {
    if (this.formulario.invalid) {
      //mostrar alerta
      console.log('Ingrese los datos requeridos');
      return;
    }
    this.isEnviarDatos = true;
  }
}
