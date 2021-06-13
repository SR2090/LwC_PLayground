import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    
    
    handleAdd(event){
        console.log(event.target)
    }
    
    handleSub(event){
        console.log(event.target)
    }
    
    handleMul(event){
        console.log(event.target)
    }
    handleDiv(event){
        console.log(event.target)
    }
}