import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    condition = true;
    handleCheck(event){
        console.log(event.details.value);
    }
}