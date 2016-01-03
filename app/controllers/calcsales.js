import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['per_page', 'page'],
  actions: {
    next: function() {
      this.incrementProperty('page');
    },
      prev: function() {
        this.decrementProperty('page');
      }
  }
});
