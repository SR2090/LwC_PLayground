import { LightningElement } from 'lwc';

export default class CreateRecordLwc_LDS extends LightningElement {
    Name;
    PhNumber;
    Email;
    accountNameChangeHandler(event){
        this.Name = event.detail.value;
    }
    accountPhoneNumberChangeHandler(event){
        this.PhNumber = event.detail.value;
    }
    accountWebsiteChangeHandler(event){
        this.Email = event.detail.value;
    }
}