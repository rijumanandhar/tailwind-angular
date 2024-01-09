import { Component } from '@angular/core';

export interface T {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-practise';
  card1view = true;
  card2view = false;
  card3view = false;
  card4view = false;
  
  accordian1view = false;
  accordian2view = false;
  accordian3view = false;
  accordian4view = false;
  accordian5view = false;

  public cards: T[] = [
    {
      title:"Product title 1",
      description:"Product title 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel.",
    },
    {
      title:"Product title 2",
      description:"Product title 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel.",
    },
    {
      title:"Product title 3",
      description:"Product title 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel.",
    },
    {
      title:"Product title 4",
      description:"Product title 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel.",
    },
  ]
  
  public accordians:T[] = [
    {
      title: "Accordian title 1",
      description: "Description for accordian 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel."
    },
    {
      title: "Accordian title 2",
      description: "Description for accordian 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel."
    },
    {
      title: "Accordian title 3",
      description: "Description for accordian 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel."
    },
    {
      title: "Accordian title 4",
      description: "Description for accordian 4.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel."
    },
    {
      title: "Accordian title 5",
      description: "Description for accordian 5.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit provident aspernatur laboriosam, corrupti saepe esse in dolores ea quibusdam dignissimos ad facilis animi assumenda ipsum adipisci accusamus minima vel."
    },
  ]

  public resetAccordians(){
    this.accordian1view = false;
    this.accordian2view = false;
    this.accordian3view = false;
    this.accordian4view = false;
    this.accordian5view = false;
  }


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

  public clickCard2(){
    this.resetCards();
    this.card2view = true;
  } 

  public clickCard3(){
    this.resetCards();
    this.card3view = true;
  } 

  public clickCard4(){
    this.resetCards();
    this.card4view = true;
  } 

  public displayAccordian1(){
    if (this.accordian1view){
      this.resetAccordians();
    }else{
      this.resetAccordians();
      this.accordian1view = true;
    }
  }

  public displayAccordian2(){
    if (this.accordian2view){
      this.resetAccordians();
    }else{
      this.resetAccordians();
      this.accordian2view = true;
    }
  }

  public displayAccordian3(){
    if (this.accordian3view){
      this.resetAccordians();
    }else{
      this.resetAccordians();
      this.accordian3view = true;
    }
  }

  public displayAccordian4(){
    if (this.accordian4view){
      this.resetAccordians();
    }else{
      this.resetAccordians();
      this.accordian4view = true;
    }
  }

  public displayAccordian5(){
    if (this.accordian5view){
      this.resetAccordians();
    }else{
      this.resetAccordians();
      this.accordian5view = true;
    }
  }
}
