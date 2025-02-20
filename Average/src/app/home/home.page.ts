import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  inputGradeOne: any = ''
  inputGradeTwo: any = ''
  inputGradeThree: any = ''
  inputGradeFour: any = ''
  resAverage: any = ''
  average: any = ''

  calcAverage() {
    const gradeOne = this.inputGradeOne
    const gradeTwo = this.inputGradeTwo
    const gradeThree = this.inputGradeThree
    const gradeFour = this.inputGradeFour

    this.average = ((gradeOne + gradeTwo + gradeThree + gradeFour) / 4).toFixed(1)

    if (this.average < 3) {
      this.resAverage = String(`Retido, sua nota ${this.average} foi menor que a 3.`)
    } else if (this.average > 3 && this.average < 5.9) {
      this.resAverage = String(`Recuperação, sua nota foi ${this.average}`)
    } else if (this.average > 6) {
      this.resAverage = String(`Aprovado, sua nota foi ${this.average}`)
    }
  }
}
