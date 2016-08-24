import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  type: DS.attr(),
  size: DS.attr(),
  price: DS.attr(),
  order: DS.hasMany('order', {async: true})
});
