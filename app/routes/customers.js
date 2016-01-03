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
    return this.get('store').query('customer', { per_page: params.per_page, page: params.page });
  }
});
