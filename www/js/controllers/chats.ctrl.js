(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ChatsCtrl', ChatsCtrl)

  function ChatsCtrl($scope, ChatsSrv) {
    $scope.$on('$ionicView.enter', function () {
      $scope.chats = ChatsSrv.all();
    });
  }
})();