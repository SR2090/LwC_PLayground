import { LightningElement,  } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class BMICalculator extends LightningElement {
    titleForLwc = "BMI Calculator 12";
    Height;
    Weight;
    btnView = false;
    Result;
    getValues(event){
        if(event.target.name === "Height"){
            this.Height = parseFloat(event.detail.value);
            // console.log(event.detail.value);
        }
        if(event.target.name === "Weight"){
            this.Weight= parseFloat(event.detail.value);
            console.log(event.detail.value);
        }
    }
   
    handleClick(event){
        this.btnView = true;
        const evt = new ShowToastEvent({
            title: 'Blank input',
            message: 'Please enter input values',
            variant: 'error',
            mode: 'dismissable'
        });
        // if(typeof this.Height == "undefined" || typeof this.Weight == "undefined"){
        //     this.dispatchEvent(evt);  
        //     console.log(this.Height, this.Weight);       
        // }else{
            
            this.Result = ( parseFloat(this.Weight)/ (parseFloat(this.Height) * parseFloat(this.Height))).toPrecision(2);
            console.log(this.Result)
        // }
        // console.log(this.Height);   
        // console.log(event.detail.value);
    }
}