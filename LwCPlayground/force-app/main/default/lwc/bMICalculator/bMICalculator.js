import { LightningElement } from 'lwc';

export default class BMICalculator extends LightningElement {
    titleForLwc = "BMI Calculator 12";
    handleClick(event){
        this.titleForLwc = "Changed Title";
        console.log("value of title", this.titleForLwc);
    }
}