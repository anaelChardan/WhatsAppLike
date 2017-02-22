(() => {
  'use_strict'
  angular.module('whatsapp.services').factory('ChatsSrv', ChatsSrv)

  function ChatsSrv($firebaseArray, $firebaseObject) {
    var chatsDb = () => firebase.database().ref().child('chats');

    return {
      all: () => $firebaseArray(chatsDb()),
      get: (chatId) => $firebaseObject(chatsDb().child(chatId)),
      add: (name, description) => {
        let newChat = {
          "name": name,
          "description": description,
          "creationDate": new Date().toISOString(),
          "lastMessage": "Pas encore de message",
          "lastMessageDate": new Date().toISOString(),
        };

        return $firebaseArray(chatsDb()).$add(newChat);
      }
    }
  }
})()