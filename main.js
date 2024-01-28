// client/main.js
Template.register.events({
    'submit form': function(event) {
      event.preventDefault();
  
      const email = event.target.email.value;
      const role = event.target.role.value;
  
      // Create user account
      const userId = Accounts.createUser({ email, password: 'password' });
  
      // Assign role to the user
      Roles.addUsersToRoles(userId, role);
  
      // Redirect to dashboard based on the role
      FlowRouter.go(`/${role}-dashboard`);
    }
  });
  // client/main.js
BlazeLayout.setRoot('body'); // Set the root for BlazeLayout

// Default route
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('mainLayout', { content: 'register' });
  }
});

// Add routes for borrower, lender, and admin dashboards
FlowRouter.route('/borrower-dashboard', {
  name: 'borrowerDashboard',
  action: function() {
    BlazeLayout.render('mainLayout', { content: 'borrowerDashboard' });
  }
});

FlowRouter.route('/lender-dashboard', {
  name: 'lenderDashboard',
  action: function() {
    BlazeLayout.render('mainLayout', { content: 'lenderDashboard' });
  }
});

FlowRouter.route('/admin-dashboard', {
  name: 'adminDashboard',
  action: function() {
    BlazeLayout.render('mainLayout', { content: 'adminDashboard' });
  }
});
