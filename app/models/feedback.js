import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  comment: DS.attr(),
  rating: DS.attr(),
  shoe: DS.belongsTo('shoe', {async: true})
});
