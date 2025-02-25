import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  inputSideA: any = ''
  inputSideB: any = ''
  inputSideC: any = ''
  resTriangle: any = ''

  calcTriangle() {
    const sideA = this.inputSideA
    const sideB = this.inputSideB
    const sideC = this.inputSideC

    if (sideA === '' || sideB === '' || sideC === '') {
      this.resTriangle = 'Preencha os lados.'
      return
    }
    if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
      if (sideA === sideB && sideA === sideC) {
        this.resTriangle = 'É um triângulo Equilátero'
      } else if (sideA !== sideB && sideA !== sideC) {
        this.resTriangle = 'É um triângulo Escaleno'
      } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        this.resTriangle = 'É um triângulo Isósceles'
      }
    } else {
      this.resTriangle = 'Isso não é um triângulo.'
    }

  }

}
