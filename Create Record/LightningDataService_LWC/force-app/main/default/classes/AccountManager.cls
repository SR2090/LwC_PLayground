public with sharing class AccountManager {
    @AuraEnabled(cacheable=true)
    public static List<Accounts> getAccounts(){
        try {
            return [SELECT id, Name, Phone from Accounts LIMIT 15];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
