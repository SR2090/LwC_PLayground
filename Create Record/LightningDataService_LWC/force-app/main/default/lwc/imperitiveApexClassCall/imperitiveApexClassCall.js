import { LightningElement, track} from 'lwc';
import gettheAccounts from '@salesforce/apex/AccountManagerNonCacheable.getAccounts'
export default class ImperitiveApexClassCall extends LightningElement {
    number;
    @track accounts;
    // gets the number of accounts to retrieve 
    // passes this as arg in the method call
    getAccountNumber(event){
        this.number = event.target.value;
    }
    // checks if the accounts are present or not
    isAccountsResolved(){
        if(this.accounts){
            return true;
        }
        return false;
    }
    getAccounts(){
        // Promise call to apex class method
        // JSON body parameters are passed
        gettheAccounts({numberOfAccounts: this.number}).then(
            response => {
                this.accounts = response;
            }
        ).catch(
            error =>{
                console.log("An error has occured ", error.body.message )
            }
        );
    }
}