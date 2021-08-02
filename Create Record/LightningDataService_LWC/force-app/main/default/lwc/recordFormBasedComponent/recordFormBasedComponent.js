import { LightningElement } from 'lwc';

export default class RecordFormBasedComponent extends LightningElement {
    recordId;
    // when record Id is null as in when we are first loading the component
    // the form will be rendered in create mode.
    fieldsArray = ['Name', 'Phone', 'Website'];
    handleSuccess(event){
        this.recordId = event.detail.recordId;
    }
}