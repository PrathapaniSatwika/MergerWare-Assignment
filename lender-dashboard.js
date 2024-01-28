// client/lender-dashboard.js
Template.lenderDashboard.events({
    'submit form': function(event) {
      event.preventDefault();
  
      const loanId = event.target.loanId.value;
  
      // Assuming you have a MongoDB collection named LoanPayments
      LoanPayments.insert({
        loanId: loanId,
        lenderId: Meteor.userId(), // Assuming you are using Meteor.userId() for authentication
        confirmationDate: new Date(),
      });
  
      // Clear the input field after submission
      event.target.loanId.value = '';
    }
  });
  
  Template.lenderDashboard.helpers({
    pastPayments: function() {
      // Assuming you have a MongoDB collection named PastPayments
      return PastPayments.find({ lenderId: Meteor.userId() });
    }
  });
  