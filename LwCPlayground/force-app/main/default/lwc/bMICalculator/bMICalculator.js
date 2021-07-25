import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {bmiHelperFunction} from 'c/bmIHelper'

export default class BMICalculator extends LightningElement {
    titleForLwc = "BMI Calculator";
    @track BmiData = {
        Height : 0,  
        Weight : 0,
        Result : 0
    }
    
    btnView = false;
    
    getValues(event){
        if(event.target.name === "Height"){
            this.BmiData.Height = parseFloat(event.detail.value);
            // console.log(event.detail.value);
        }
        if(event.target.name === "Weight"){
            this.BmiData.Weight= parseFloat(event.detail.value);
            //console.log(event.detail.value);
        }
    }
   
    handleClick(event){
        this.btnView = true;
        // const evt = new ShowToastEvent({
        //     title: 'Blank input',
        //     message: 'Please enter input values',
        //     variant: 'error',
        //     mode: 'dismissable'
        // });
        this.BmiData.Result = bmiHelperFunction(this.BmiData.Height, this.BmiData.Weight);
    }
}