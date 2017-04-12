import { Component } from '@angular/core';


import{card} from './model';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls:['./app.component.css']
})

export class AppComponent { 
  name = 'Angular';
  cards:any[]=[];
  card:card={
    name:'prithvi',
    address:'Vja',
    emailid:'prithvi@gmail.com',
    phone:123467890,
  }

  constructor(){
    for(let i=0;i<9;i++){
      let mock={};
      for(let property in this.card){
        if (this.card.hasOwnProperty(property)) {
          mock[property]=this.card[property]+i;
          mock[property+"Clicked"]=false;
        }
      }
      this.cards.push(mock);
    }
  }

  isClicked(){
    for(let i=0;i<this.cards.length;i++){ 
      for(let property in this.cards[i]){
          if (this.cards[i].hasOwnProperty(property)) {
              if(typeof(this.cards[i][property]) === "boolean"){
                this.cards[i][property]=false;  
              }
          }
      }
    }
  }

 }
