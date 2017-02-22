(() => {
  'use_strict'
  angular.module('whatsapp.services').factory('MessagesSrv', MessagesSrv)

  function MessagesSrv(ContactsSrv, AuthSrv, $firebaseArray, $firebaseObject) {
    var messagesDb = () => firebase.database().ref().child('messages');

    return {
      get: (chatId) => $firebaseArray(messagesDb().child(chatId)),
      add: (message, chatId) => {
        ContactsSrv.get(AuthSrv.user().id).$loaded().then(
          (user) => {
            let newMessage = {
              "message": message,
              "sender_id": AuthSrv.user().id,
              "sender": user.firstName + " " + user.lastName,
              "sentDate": new Date().toISOString()
            }

            let messageAdded = $firebaseArray(messagesDb().child(chatId)).$add(newMessage);

            firebase.database().ref().child('chats').child(chatId).update({
              lastMessage: newMessage.message,
              lastMessageDate: newMessage.sentDate
            })

            return messageAdded;
          }
        );
      }
    };
  }
})();