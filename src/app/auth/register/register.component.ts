import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nombre = '';
  apellidoPaterno = '';
  apellidoMaterno = '';
  email = '';
  numeroEmpleado!: number;
  password = '';

  constructor(private authService: AuthService) {}
  
  onRegister() {
    const userData = {
      nombre: this.nombre,
      apellido_paterno: this.apellidoPaterno,
      apellido_materno: this.apellidoMaterno,
      email: this.email,
      numero_empleado: this.numeroEmpleado,
      password: this.password
    };
    
    this.authService.register(userData).subscribe(response => {
      console.log('Usuario registrado con éxito', response);
    }, error => {
      console.error('Error al registrar usuario', error);
    });
  }
}
