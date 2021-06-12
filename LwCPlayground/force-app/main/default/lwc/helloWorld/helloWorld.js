import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    bindingElement = ""
    addValue(event){
        // console.log(event.detail.value)
        this.bindingElement = event.detail.value;
    }
}