import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').query('calcsale', { start: 0, end: 0, user: true, payment: true, per_page: 0, page: params.page });
  }
});
