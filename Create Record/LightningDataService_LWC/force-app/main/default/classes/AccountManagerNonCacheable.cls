public with sharing class AccountManagerNonCacheable {
    
    @AuraEnabled
    public static List<Account> getAccounts(Integer numberOfAccounts){
        return [Select Id, Name, Phone from Account Limit :numberOfAccounts];
        // try {
            
        // } catch (Exception e) {
        //     throw new AuraHandledException(e.getMessage());
        // }
    }
    
}
