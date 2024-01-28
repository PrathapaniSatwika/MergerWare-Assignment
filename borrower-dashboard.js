// client/borrower-dashboard.js
Template.borrowerDashboard.events({
    'submit form': function(event) {
      event.preventDefault();
  
      const loanAmount = event.target.loanAmount.value;
  
      // Assuming you have a MongoDB collection named LoanRequests
      LoanRequests.insert({
        amount: loanAmount,
        borrowerId: Meteor.userId(), // Assuming you are using Meteor.userId() for authentication
        status: 'pending' // You can set the initial status as needed
      });
  
      // Clear the input field after submission
      event.target.loanAmount.value = '';
    }
  });
  
  Template.borrowerDashboard.helpers({
    pastLoans: function() {
      // Assuming you have a MongoDB collection named PastLoans
      return PastLoans.find({ borrowerId: Meteor.userId() });
    }
  });
  