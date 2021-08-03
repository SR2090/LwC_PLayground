public with sharing class AccountManager {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [Select Id, Name, Phone from Account Limit 15];
        // try {
            
        // } catch (Exception e) {
        //     throw new AuraHandledException(e.getMessage());
        // }
    }
}
