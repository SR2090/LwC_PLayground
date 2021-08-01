import { LightningElement } from 'lwc';

export default class UsingLdsBaseComponent extends LightningElement {
    recordId;
    SuccessHandler(event){
        this.recordId = event.detail.id;
        console.log(this.recordId);
    }
}