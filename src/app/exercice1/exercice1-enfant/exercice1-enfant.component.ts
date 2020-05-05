import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() updateCounter: EventEmitter<number> = new EventEmitter<number>();
  public increaseValue = 1 ;
  public decreaseValue = 1 ;
  constructor() { }

  ngOnInit() {
  }


  increaseCounter(increaseValue: number) {
    this.compteur += increaseValue;
    this.updateCounter.emit(this.compteur);
  }

  decreaseCounter(decreaseValue: number) {
    this.compteur -= decreaseValue;
    this.updateCounter.emit(this.compteur);
  }
}
