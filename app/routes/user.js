import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').query('user', params.user_id);
  }
});
