import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    Number1;
    Number2;
    Result = "";
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
            this.Result = `${parseInt(this.Number1) + parseInt(this.Number2)}`;
        }
        console.log(this.Result, typeof(this.Result));
    }
    subHandler(){
        if(this.Number1 === undefined || this.Number1 === undefined){

        }else{
            this.Result = `${parseInt(this.Number1) - parseInt(this.Number2)}`;
        }
        console.log(this.Result, typeof(this.Result));
    }
    mulHandler(){
        if(this.Number1 === undefined || this.Number1 === undefined){

        }else{
            this.Result = `${parseInt(this.Number1) * parseInt(this.Number2)}`;
        }
        console.log(this.Result, typeof(this.Result));
    }
    divHandler(){
        if(this.Number1 === undefined || this.Number1 === undefined){

        }else{
            this.Result = `${parseInt(this.Number1) / parseInt(this.Number2)}`;
        }
        console.log(this.Result, typeof(this.Result));
    }
    showHistory(){
        
    }
    
}