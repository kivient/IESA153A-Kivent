// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// var isAuthenticated = function() {
//   return false;
// }

angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ui.router'])

.run(function($ionicPlatform, $rootScope, $state) {
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

    var googleanalyticsApp = angular.module('googleanalytics', ['ionic'])
    .run(function($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(function() {
            if(typeof analytics !== undefined) {
                analytics.startTrackerWithId("UA-62201685-1");
            } else {
                console.log("Google Analytics Unavailable");
            }
        });
    });

    googleanalyticsApp.controller('AwesomeController', function($scope) {
      if(typeof analytics !== undefined) { analytics.trackView("Awesome Controller"); }
 
        $scope.initEvent = function() {
            if(typeof analytics !== undefined) { analytics.trackEvent("Category", "Action", "Label", 25); }
        }
    });
  });

  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !AuthService.isAuthenticated()) {
      $state.go("app.login");
      event.preventDefault(); 
    }
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    authenticate: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.events', {
    url: "/events",
    authenticate: true,
    views: {
      'menuContent': {
        templateUrl: "templates/events.html",
        controller: 'EventsCtrl',
      }
    },
  })

  .state('app.event', {
    url: "/event/:id",
    authenticate: true,
    views: {
      'menuContent': {
        templateUrl: "templates/event.html",
        controller: 'EventCtrl'
      }
    }
  })

  .state('app.profil', {
    url: "/profil",
    authenticate: true,
    views: {
      'menuContent': {
        templateUrl: "templates/profil.html",
        controller: 'ProfilCtrl'
      }
    }
  })

  .state('app.create', {
    url: "/create",
    authenticate: true,
    views: {
      'menuContent': {
        templateUrl: "templates/create.html",
        controller: 'CreateCtrl'
      }
    }
  })

  .state('app.login', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.register', {
    url: "/register",
    views: {
      'menuContent': {
        templateUrl: "templates/register.html",
        controller: 'RegisterCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});

function userIsLoggedIn() {
  return false;
}
