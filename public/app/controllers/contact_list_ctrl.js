angular.module("app").controller('ContactListCtrl', function($scope, sharedData, contacts) {
  var self = this;
  
  contacts.success(function(data) {
    self.contacts = data.contacts;

    if(self.contacts.length !== 0) {
      $scope.changeContact(self.contacts[0]);
    }
  });

  $scope.changeContact = function(contact) {
    sharedData.contact = contact;
  };
});