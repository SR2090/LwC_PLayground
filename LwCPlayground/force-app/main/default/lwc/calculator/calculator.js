import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    Number1;
    Number2;
    inputHandler(event){
        this.Number1 = event.detail.value;
        this.Number2 = event.detail.value;
        console.log(this.Number1,this.Number2)
    }
}