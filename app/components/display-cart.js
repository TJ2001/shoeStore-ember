import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  totalPrice: 0,
  // totalOrder: Ember.computed.sum('shoppingCart.items.price'),
  actions: {
    total(params){
      var sum = 0;
      params.forEach(function(item){
        sum += parseInt(item.get('price'));
      });
      console.log(sum);
      this.set("totalPrice", sum);
    }
  }
});
