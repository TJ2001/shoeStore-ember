import DS from 'ember-data';

export default DS.Model.extend({
  customerID: DS.attr(),
  time: Date.now(),
  shoe: DS.hasMany('shirt', {async: true})
});
