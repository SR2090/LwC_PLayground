import { LightningElement, track} from 'lwc';
import gettheAccounts from '@salesforce/apex/AccountManagerNonCacheable.getAccounts'
export default class ImperitiveApexClassCall extends LightningElement {
    number;
    @track accounts;
    getAccountNumber(event){
        this.number = event.target.value;
    }
    isAccountsResolved(){
        if(this.accounts){
            return true;
        }
        return false;
    }
    getAccounts(){
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