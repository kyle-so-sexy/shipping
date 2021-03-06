/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/api/customer', require('./api/customer'));
  app.use('/api/vendortable', require('./api/vendortable'));
  app.use('/api/vesseltable', require('./api/vesseltable'));
  app.use('/api/expensetable', require('./api/expensetable'));
  app.use('/api/systemutilities', require('./api/systemutilities'));
  app.use('/api/billingmaintenance', require('./api/billingmaintenance'));
  app.use('/api/generatecreditdebitnote', require('./api/generatecreditdebitnote'));
  app.use('/api/normalbillingmaintenance', require('./api/normalbillingmaintenance'));
  app.use('/api/disbursement_maintenance', require('./api/disbursement_maintenance'));
  app.use('/api/generatedisbursementaccount', require('./api/generatedisbursementaccount'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
