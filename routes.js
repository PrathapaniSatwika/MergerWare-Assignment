// client/routes.js
FlowRouter.route('/', {
    action: function() {
      BlazeLayout.render('mainLayout', { content: 'register' });
    }
  });
  
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
  