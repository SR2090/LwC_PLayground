import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    input1(event){
        v1 = event.detail.value
    }
    input2(event){
        v2 = event.target.value
    }
    
    handleAdd(event){
        console.log(v1+v2);
    }
    
    handleSub(event){
        console.log(v1+v2);
        
    }
    
    handleMul(event){
        console.log(v1+v2);
        
    }
    handleDiv(event){
        console.log(v1+v2);
        
    }
}