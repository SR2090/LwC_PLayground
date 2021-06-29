import { LightningElement } from 'lwc';

export default class BMICalculator extends LightningElement {
    titleForLwc = "BMI Calculator 12";
    Height;
    Weight;
    getValues(event){
        if(event.target.name === "Height"){
            console.log(event.detail.value);
        }
        if(event.target.name === "Weight"){
            console.log(event.detail.value);
        }
    }
    handleClick(event){
        this.titleForLwc = "Changed Title";
        console.log("value of title", this.titleForLwc);
    }
}