// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('whatsapp', ['ionic', 'whatsapp.controllers', 'whatsapp.services', 'whatsapp.filters', 'whatsapp.directives'])

  .run(function ($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
        console.log("coucou");
        if (error === "AUTH_REQUIRED") {
          $state.go("signin");
        }
      });
    });

    
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.contacts', {
        url: '/contacts',
        views: {
          'tab-contacts': {
            templateUrl: 'templates/tab-contacts.html',
            controller: 'ContactsCtrl',
            resolve: {
              "currentAuth": ["AuthSrv", (AuthSrv) => AuthSrv.$requireAuth()]
            }
          }
        }
      })
      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl',
            resolve: {
              "currentAuth": ["AuthSrv", (AuthSrv) => AuthSrv.$requireAuth()]
            }
          }
        }
      })
      .state('tab.chat-new', {
        url: '/chats/new',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-new.html',
            controller: 'NewChatCtrl',
            resolve: {
              "currentAuth": ["AuthSrv", (AuthSrv) => AuthSrv.$requireAuth()]
            }
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl',
            resolve: {
              "currentAuth": ["AuthSrv", (AuthSrv) => AuthSrv.$requireAuth()]
            }
          }
        }
      })
      .state('tab.parameters', {
        url: '/parameters',
        views: {
          "tab-parameters": {
            templateUrl: 'templates/tab-parameters.html',
            controller: 'ParametersCtrl',
            resolve: {
              "currentAuth": ["AuthSrv", (AuthSrv) => AuthSrv.$requireAuth()]
            }
          }
        }

      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'templates/signin.html',
        controller: 'SigninCtrl'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/signin');
  });

angular.module('whatsapp.controllers', []);
angular.module('whatsapp.directives', []);
angular.module('whatsapp.filters', []);
angular.module('whatsapp.services', []);
