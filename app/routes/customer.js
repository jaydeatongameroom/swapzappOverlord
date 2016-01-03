import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').query('customer', params.customer_id);
  }
});
