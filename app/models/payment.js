import DS from 'ember-data';

export default DS.Model.extend({
  storeCredit: DS.attr('number'),
  check: DS.attr('number'),
  cash: DS.attr('number'),
  giftCard: DS.attr('number'),
  credit: DS.attr('number'),
  sales: DS.hasMany('sale'),
  storeCreditSale: function() {
   return this.get('storeCredit') / 100;
  }.property('storeCredit'),
  checkSale: function() {
   return this.get('check') / 100;
  }.property('check'),
  cashSale: function() {
   return this.get('cash') / 100;
  }.property('cash'),
  giftCardSale: function() {
    return this.get('giftCard') / 100;
  }.property('giftCard'),
  creditSale: function() {
   return this.get('credit') / 100;
  }.property('credit')
});
