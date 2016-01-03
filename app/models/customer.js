import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  sku: DS.attr('string'),
  credit: DS.attr('number'),
  identifier: DS.attr('string')
});
