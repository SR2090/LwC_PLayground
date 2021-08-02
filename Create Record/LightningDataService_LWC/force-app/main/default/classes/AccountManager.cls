public with sharing class AccountManager {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [Select id, Name, Phone from Account Limit 15];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
