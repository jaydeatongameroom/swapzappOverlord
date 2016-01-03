import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('customers');
  this.route('customer', {path: 'customer/:customer_id'});
  this.route('sale', {path: 'sale/:sale_id'});
  this.route('sales');
  this.route('user', {path: 'users/:user_id'});
  this.route('users');
  this.route('calcsales', {path: 'calcsales'});
});

export default Router;
