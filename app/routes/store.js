import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('shoe');
  },
  actions: {
    save3(params) {
      var newShoe = this.store.createRecord('shoe', params);
      newShoe.save();
      this.transitionTo('index');
    }
  }
});
