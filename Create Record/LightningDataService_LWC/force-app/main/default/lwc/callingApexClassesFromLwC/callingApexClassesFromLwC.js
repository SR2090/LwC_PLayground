import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/AccountManger"
export default class CallingApexClassesFromLwC extends LightningElement {
    
    // gets the accounts from the apex class method getAccounts
    @wire(getAccounts) accounts;

    isAccountsResolved(){
        if(this.accounts){
            return true;
        }
        return false;
    }
}