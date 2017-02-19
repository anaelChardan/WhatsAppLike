(() => {
  'use_strict'
  angular.module('whatsapp.services').factory('MessagesSrv', MessagesSrv)

  function MessagesSrv(ContactsSrv, UuidSrv, AuthSrv) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    var messages = [];
    
    messages = [{
      "_id": 1,
      "chat_id": 1,
      "sender_id": "589b2866cd807e41dbc48d70",
      "message": "Un super message",
      "sentDate": "2016-02-13T08:10:56.045Z"
    }, {
      "_id": 1,
      "chat_id": 1,
      "sender_id": "hoho",
      "message": "Un super message 2",
      "sentDate": "2016-02-13T09:10:56.045Z"
    }];

    var transformMessage = () => messages.map(e => {
      let contact = ContactsSrv.get(e.sender_id)
      e.sender = contact === undefined ? "contact inconnu" : contact.firstName + " " + contact.lastName;
      return e
    });

    return {
      get: (chatId) => transformMessage().filter(e => e.chat_id == chatId).sort((a1, a2) => new Date(a2.sentDate) - new Date(a1.sentDate)),
      add: (message, chatId) => {
        let newMessage = {
          "_id": UuidSrv.getUUID(),
          "chat_id": chatId,
          "sender_id": AuthSrv.connectedUser(),
          "message": message,
          "sentDate": new Date().toISOString()
        };

        messages.push(newMessage);
      }
    };
  }
})();