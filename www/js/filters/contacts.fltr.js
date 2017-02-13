(() => {
    'use_strict'

    angular.module('whatsapp.filters').filter('ContactsFltr', ContactsFltr);

    function ContactsFltr() {
        console.log("coucoucnanan")
        return (items, scope) => {
            console.log("coucou filter");
            let query = scope.model.queryContact;

            if (query === undefined) {
                return true;
            }

            return contact.firstName.toLowerCase().indexOf(query.toLowerCase) > -1 || contact.lastName.toLowerCase().indexOf(query.toLowerCase) > -1;
        };
    }
})();