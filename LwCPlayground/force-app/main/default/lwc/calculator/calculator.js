import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    Number1;
    Number2;
    input1(event){
        console.log(event.detail.value);
    }
    input2(event){
        console.log(event.detail.value);
    }
    
}