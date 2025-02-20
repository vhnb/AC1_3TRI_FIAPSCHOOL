import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  optionTemperature: any = ''
  inputTemperature: any = ''
  resTemperature: any = ''

  calcularTemperature() {
    if (this.inputTemperature === '') {
      this.resTemperature = 'Digite uma temperatura'
    } else {
      if (this.optionTemperature === 'Celsius') {
        this.resTemperature = ((9 * this.inputTemperature + 160) / 5).toFixed(2)
      } else if (this.optionTemperature === 'Fahrenheit') {
        this.resTemperature = ((this.inputTemperature - 32) * (5 / 9)).toFixed(2)
      } else {
        this.resTemperature = 'Selecione uma unidade!'
      }
    }
  }
}
