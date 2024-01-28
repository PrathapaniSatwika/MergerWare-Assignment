// client/main-layout.js
Template.mainLayout.helpers({
    isBorrower: function () {
      return Roles.userIsInRole(Meteor.userId(), 'borrower');
    },
    isLender: function () {
      return Roles.userIsInRole(Meteor.userId(), 'lender');
    },
    isAdmin: function () {
      return Roles.userIsInRole(Meteor.userId(), 'admin');
    }
  });
  