(() => {
    'use_strict'

    angular.module('whatsapp.filters').filter('ContactsFltr', ContactsFltr);

    function ContactsFltr() {
        return (items, queryContact) => {
            if (queryContact === undefined) {
                return items;
            }
            
            return items.filter(contact => contact.firstName.toLowerCase().indexOf(queryContact.toLowerCase()) > -1 || contact.lastName.toLowerCase().indexOf(queryContact.toLowerCase()) > -1);
        };
    }
})();