import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Circulo } from '../figuras';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class CirculoComponent {
  radio: number | null = null;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.radio !== null) {
      const circulo = new Circulo(this.radio);
      this.perimetro = circulo.calcularPerimetro();
    } 
   
  else {
      console.error('El radio debe tener un valor válido.');
    }
  }
}  


