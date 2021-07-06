import { LightningElement } from 'lwc';

export default class LifeCycleDemo extends LightningElement {
    LifeCycleDemo(){
        console.log("-----------------------------------------------------")
        console.log("Constructor is called since the component is called");
        console.log("-----------------------------------------------------")
    }
    
    connectedCallback(){
        console.log("-----------------------------------------------------")
        console.log("Component has been inserted into the dom USE TO MANIPULATE Attr.")
        console.log("-----------------------------------------------------")
    }
    renderedCallback(){
        console.log("-----------------------------------------------------")
        console.log("Component has been rendered. The DOM can be rendered Programitically")
        console.log("-----------------------------------------------------")
    }
    disconnectedCallback(){
        console.log("#####################################################")
        console.log("User has changed page component is DYINGG ARGHHHHHHHHHHHHH.......")
        console.log("#####################################################")
    }
}