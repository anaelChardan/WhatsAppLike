(() => {
  'use_strict'
  angular.module('whatsapp.services').factory('ChatsSrv', ChatsSrv)

  function ChatsSrv(MessagesSrv) {
    var chats = [{
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
      let messages = MessagesSrv.get(e._id)
      e.lastMessage = messages[0] === undefined ? "Pas de message" : messages[0]
      return e
    });

    return {
      all: () => transformChats(),
      get: (chatId) => transformChats().find(e => e._id == chatId)
    };
  }
})()