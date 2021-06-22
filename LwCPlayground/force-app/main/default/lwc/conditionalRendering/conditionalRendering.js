import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    condition = true;
    handleCheck(event){
        console.log(event.detail.checked);
        this.condition = event.detail.checked;
   }
}