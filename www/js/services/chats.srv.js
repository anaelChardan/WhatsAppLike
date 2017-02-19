(() => {
  'use_strict'
  angular.module('whatsapp.services').factory('ChatsSrv', ChatsSrv)

  function ChatsSrv(MessagesSrv, UuidSrv) {
    chats = [{
      "_id": "0",
      "name": 'Cours de Js',
      "description": "une super description 1",
      "creationDate": "2016-02-13T08:10:56.045Z"
    }, {
      "_id": 1,
      "name": 'Cours de Scala',
      "description": "une super description 2",
      "creationDate": "2016-02-13T08:10:56.046Z"
    }, {
      "_id": "2",
      "name": 'Cours de maths',
      "description": "une super description 3",
      "creationDate": "2016-02-13T08:10:56.047Z"
    }, {
      "_id": "3",
      "name": 'Cours de Graphes',
      "description": "une super description 4",
      "creationDate": "2016-02-13T08:10:56.041Z"
    }, {
      "id": "4",
      "name": 'Cours de BDD',
      "description": "une super description 5",
      "creationDate": "2016-02-13T08:10:56.049Z"
    }];

    var transformChats = () => chats.map(e => {
      let lastMessage = MessagesSrv.get(e._id)[0];
      e.lastMessage = lastMessage === undefined ? "Pas de message" : lastMessage;
      return e
    });

    return {
      all: () => transformChats(),
      get: (chatId) => transformChats().find(e => e._id == chatId),
      add: (name, description) => {
        let newChat = {
          "_id": UuidSrv.getUUID(),
          "name": name,
          "description": description,
          "creationDate": new Date().toISOString()
        };

        chats.push(newChat);
        
        return newChat;
      }
    }
  }
})()