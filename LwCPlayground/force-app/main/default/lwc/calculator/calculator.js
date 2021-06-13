import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    v1 = 0;
    v2 = 0;
    input1(event){
        console.log(this.v1);
    }
    input2(event){
        console.log(this.v2);
    }
    
    // handleAdd(event){
    //     console.log(v1+v2);
    // }
    
    // handleSub(event){
    //     console.log(v1+v2);
        
    // }
    
    // handleMul(event){
    //     console.log(v1+v2);
        
    // }
    // handleDiv(event){
    //     console.log(v1+v2);
        
    // }
}