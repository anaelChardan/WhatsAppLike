(() => {
  'use_strict'
  angular.module('whatsapp.services').factory('ContactsSrv', ContactsSrv)
  // Might use a resource here that returns a JSON array

  function ContactsSrv(UuidSrv, $firebaseArray, $firebaseObject) {
    var contactsDb = () => firebase.database().ref().child('contacts');

    return {
      all: () => $firebaseArray(contactsDb()),
      get: (contactId) => $firebaseObject(contactsDb().child(contactId)),
      add: (userId, firstName, lastName, email) => {
        let newContact = {
          "email": email,
          "firstName": firstName,
          "lastName": lastName,
        };

        return contactsDb().child(userId).set(newContact);
      }
    };
  }
})()