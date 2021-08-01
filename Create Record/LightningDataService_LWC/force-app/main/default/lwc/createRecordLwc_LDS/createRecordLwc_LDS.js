import { LightningElement, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website'];
export default class CreateRecordLwc_LDS extends LightningElement {
    Name;
    PhNumber;
    Website;
    recordId;

    @wire(getRecord, {recordId:'$recordId', fields: fieldArray}) accountRecord;

    accountNameChangeHandler(event){
        this.Name = event.detail.value;
    }
    accountPhoneNumberChangeHandler(event){
        this.PhNumber = event.detail.value;
    }
    accountWebsiteChangeHandler(event){
        this.Website = event.detail.value;
    }
    // createAccount method to map field values params with actual name 
    createAccount(){
        // takes
        // field apiName as key 
        // value as value
        const fields = {
            "Name" : this.Name,
            "Phone" : this.PhNumber,
            "Website": this.Website,
        };
        // Create a Js object to map these fields to their object name
        // takes an object name
        // Fields 
        // is an input for createRecord method
        const recordInput = {
            apiName: 'Account',
            fields,
        }
        createRecord(recordInput).then(response => {
            console.log('Account has been created ', response.id)
            this.recordId = response.id;
        }).catch(error => {
            console.log(error);
        })
    }
    get getAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    };
    get getAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }
    get getAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }
}