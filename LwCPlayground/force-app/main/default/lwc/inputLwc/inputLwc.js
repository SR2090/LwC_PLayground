import { LightningElement } from 'lwc';

export default class InputLwc extends LightningElement {
    someVal = ""
    handle(event){
        console.log(event)
        this.someVal = event.detail.value;    
    }
    
}