import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    inputVal;
    // after calling the child component in the 
    // template we need to 
    // call the public method
    setCheckBox(event){
        // calling the child component's public method has 2 steps
        // first i need to select the child component using document.querySelector
        const childComponent = document.querySelector('c-public-method-child');
        // then i need to call the child component method
        const msg = childComponent.selectCheckBox(this.inputVal);
        console.log("Returned Message", msg);
    }    
}