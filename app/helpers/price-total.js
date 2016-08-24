import Ember from 'ember';

export function priceTotal(params) {
  var totalPrice = params.get('price');
  var sum = 0;
  params.forEach(function(){
    sum += totalPrice;
  });
  console.log(sum);
  console.log(totalPrice);
}

export default Ember.Helper.helper(priceTotal);
