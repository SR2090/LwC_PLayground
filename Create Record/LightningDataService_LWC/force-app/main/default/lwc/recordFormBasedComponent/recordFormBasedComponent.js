import { LightningElement } from 'lwc';

// import NAME_FIELDS from '@salesforce/schema/Account.Name';
// import PH_FIELDS from '@salesforce/schema/Account.Name';
// import WEBSTE_FIELDS from '@salesforce/schema/Account.Name';

export default class RecordFormBasedComponent extends LightningElement {
    recordId;
    // when record Id is null as in when we are first loading the component
    // the form will be rendered in create mode.
    // fieldsArray = [NAME_FIELDS, PH_FIELDS, WEBSTE_FIELDS];
    handleSuccess(event){
        this.recordId = event.detail.recordId;
    }
}