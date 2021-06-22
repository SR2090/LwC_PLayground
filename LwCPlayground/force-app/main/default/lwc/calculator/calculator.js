import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    Number1;
    Number2;
    Result = "";
    Stack = [];
    status = false;
    inputHandler(event){
        if(event.target.name === "Number1"){
            this.Number1 = event.detail.value;
        }else{
            this.Number2 = event.detail.value;
        }
    }
    addHandler(){
        if(this.Number1 === undefined || this.Number1 === undefined){

        }else{
            this.Result = `Result of Adding ${this.Number1} with ${this.Number2} is ${parseInt(this.Number1) + parseInt(this.Number2)}`;
        }
        this.Stack.push(this.Result);
        console.log(this.Result, typeof(this.Result));
    }
    subHandler(){
        if(this.Number1 === undefined || this.Number1 === undefined){

        }else{
            this.Result = `Result of Subtracting ${this.Number2} from ${this.Number2} is ${parseInt(this.Number1) - parseInt(this.Number2)}`;
        }
        console.log(this.Result, typeof(this.Result));
    }
    mulHandler(){
        if(this.Number1 === undefined || this.Number1 === undefined){

        }else{
            this.Result = `Result of Multiplying ${this.Number1} and ${this.Number2} is ${parseInt(this.Number1) * parseInt(this.Number2)}`;
        }
        console.log(this.Result, typeof(this.Result));
    }
    divHandler(){
        if(this.Number1 === undefined || this.Number1 === undefined){

        }else{
            this.Result = `Result of Divding ${this.Number1} from ${this.Number2} is ${parseInt(this.Number1) / parseInt(this.Number2)}`;
        }
        console.log(this.Result, typeof(this.Result));
    }
    showHistory(event){
        status = event.detail.checked;  
        console.log(status)    
    }

    
}