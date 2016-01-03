import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    per_page: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.get('store').query('sale', { user: true, payment: true, per_page: params.per_page, page: params.page });
    return this.get('store').query('user', params.user_id);
  }
});
