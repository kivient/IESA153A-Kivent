var allEvents = [
    { 
      id: 1,
      category    : 'Soirée',
      title       : 'Lancement de l\'applicaiton',
      hours       : {start: '19:00', end: '06:00', date: '17/04/2015'},
      owner       : {displayName: 'Henri Durand', phoneNumbers: '0687384537'},
      adress      : {street: '6 rue Froment', cp: '75011', city: 'Paris'},
      description : 'Soirée de lancement de l\'appli Kivient',
      picture     : 'ionic.png'
    },
    { id: 2, title: 'Event 02' },
  ];


angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

/** List all events **/
.controller('EventsCtrl', function($scope) {
  $scope.events = allEvents;
})



/** Single event age **/
.controller('EventCtrl', function($scope, $stateParams, $cordovaContacts) {
  $scope.events = allEvents;
  var id = $stateParams.id;

  // Get this event information
  $scope.events.forEach( function(a, e) {
    if (a.id == id) {
      $scope.thisEvent = a;
      return false;
    }
  });
  
  // Function to save owner event contact
  contactForm = $scope.thisEvent.owner;
  $scope.addContact = function() {
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('Principal', contactForm.phoneNumbers, false);
    contactForm.phoneNumbers = phoneNumbers;
    console.log(contactForm);

    $cordovaContacts.save(contactForm).then(function(result) {
      // alert(result);
    }, function(err) {
      // Contact error
    });
  };

})



.controller('ProfilCtrl', function($scope) {
})

.controller('CreateCtrl', function($scope) {
});
