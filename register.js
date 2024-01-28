// client/register.js
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
  