import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(params) {
      var newShoe = this.store.createRecord('ordered-shoe', params);
      newShoe.save();
      this.transitionTo('index');
    }
  }
});
