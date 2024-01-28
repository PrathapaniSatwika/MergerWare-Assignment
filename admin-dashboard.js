// client/admin-dashboard.js
Template.adminDashboard.helpers({
    completeTransactions: function() {
      // Assuming you have a MongoDB collection named CompleteTransactions
      return CompleteTransactions.find();
    }
  });  