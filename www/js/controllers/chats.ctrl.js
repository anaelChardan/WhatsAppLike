(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ChatsCtrl', ChatsCtrl)

  function ChatsCtrl($scope, ChatsSrv) {
    $scope.remove = (chat) => ChatsSrv.remove(chat);

    $scope.$on('$ionicView.enter', function () {
      $scope.chats = ChatsSrv.all();
    });
  }
})();