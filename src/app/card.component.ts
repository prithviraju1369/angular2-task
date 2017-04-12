import { Component,Input ,Output,EventEmitter} from '@angular/core';


import{card} from './model';
@Component({
  selector: 'card',
  templateUrl: `./card.component.html`,
  styleUrls:['./card.component.css']
})

export class CardComponent {
    @Input() card: any;
    @Output() isClicked = new EventEmitter <boolean> ();
    toggle:boolean;
    constructor(){

    }

    editName(){
        this.toggle=!this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.nameClicked=!this.card.nameClicked; 
    }
    
    onNameEnter(evt:KeyboardEvent){
        this.card.name = (<HTMLInputElement>event.target).value ;
        this.card.nameClicked= !this.card.nameClicked;
    }

    editAddress(){
        this.toggle=!this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.addressClicked=!this.card.addressClicked; 
    }
    
    onAddressEnter(evt:KeyboardEvent){
        this.card.address = (<HTMLInputElement>event.target).value ;
        this.card.addressClicked= !this.card.addressClicked;
    }

    editEmailid(){
        this.toggle=!this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.emailidClicked=!this.card.emailidClicked; 
    }
    
    onEmailidEnter(evt:KeyboardEvent){
        this.card.emailid = (<HTMLInputElement>event.target).value ;
        this.card.emailidClicked= !this.card.emailidClicked;
    }

    editPhone(){
        this.toggle=!this.toggle;
        this.isClicked.emit(this.toggle);
        this.card.phoneClicked=!this.card.phoneClicked; 
    }
    
    onPhoneEnter(evt:KeyboardEvent){
        this.card.phone = (<HTMLInputElement>event.target).value ;
        this.card.phoneClicked= !this.card.phoneClicked;
    }
 }
