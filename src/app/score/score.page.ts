import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

   no: number = 0;

  constructor() { }

  ngOnInit() {
  }

  up() {
    this.no++;
  }

  down() {
    if (this.no > 0) {
      this.no--;
    } else {
      console.log("Score terendah adalah 0")
    }
  }

}
