// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// var isAuthenticated = function() {
//   return false;
// }

angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ui.router', 'ngStorage'])

.run(function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      window.StatusBar.hide();
    }

    var delegate = new cordova.plugins.locationManager.Delegate();

    delegate.didDetermineStateForRegion = function (pluginResult) {

      cordova.plugins.locationManager
        .appendToDeviceLog('[DOM]didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

    };

    delegate.didStartMonitoringForRegion = function (pluginResult) {}

    delegate.didRangeBeaconsInRegion = function(pluginResult) {

      var beaconsFound = pluginResult.beacons;

      if ( beaconsFound && beaconsFound.length>0 ) { 
        // alert('beacon');
        $rootScope.$broadcast('beacon', true);
      } else if (beaconsFound && beaconsFound.length <= 0) {
        $rootScope.$broadcast('beacon', false);
      }

    }


    var id = 'iBKS';
    var uuid = '17586a9d-1fd4-4b05-8a50-ac08b6fdc91c';
    var minor = 1; var major = 4;
    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(id, uuid, major, minor);
    
    cordova.plugins.locationManager.setDelegate(delegate);
    cordova.plugins.locationManager.requestAlwaysAuthorization();
    cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
           .fail(
              console.error
            ).done();


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
