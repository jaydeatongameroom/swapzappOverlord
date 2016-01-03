import DS from 'ember-data';

export default DS.Model.extend({
  primaryKey: 'id',
  sku: DS.attr('string'),
  completedAt: DS.attr('string'),
  userId: DS.attr('string'),
  creditBalance: DS.attr('number'),
  payment: DS.belongsTo('payment', {async: true}),
  user: DS.belongsTo('user', {async: true})
  });
