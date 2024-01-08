import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-angular';
  card1view = true;
  card2view = false;
  card3view = false;
  card4view = false;

  public resetCards(){
    this.card1view = false;
    this.card2view = false;
    this.card3view = false;
    this.card4view = false;
  }

  public clickCard1(){
    this.resetCards();
    this.card1view = true;
  } 
}
