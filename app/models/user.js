import DS from 'ember-data';
export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  administrator: DS.attr('boolean'),
  sale: DS.hasMany('sale'),
  fullName: function() {
   return this.get('firstName') + ' ' + this.get('lastName');
 }.property('firstName', 'lastName')
});
