public with sharing class AccountManager {
    @AuraEnabled(cacheable=true)
    public static List<Accounts> getAccounts(){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
