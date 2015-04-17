// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.events', {
    url: "/events",
    views: {
      'menuContent': {
        templateUrl: "templates/events.html",
        controller: 'EventsCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/event/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/event.html",
        controller: 'EventCtrl'
      }
    }
  })

  .state('app.profil', {
    url: "/profil",
    views: {
      'menuContent': {
        templateUrl: "templates/profil.html",
        controller: 'ProfilCtrl'
      }
    }
  })

  .state('app.crate', {
    url: "/create",
    views: {
      'menuContent': {
        templateUrl: "templates/create.html",
        controller: 'CreateCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/events');
});
