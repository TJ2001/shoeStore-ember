import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('shoe');
  },
  actions: {
    save3(params) {
      var newShoe = this.store.createRecord('shoe', params);
      newShoe.save();
      this.transitionTo('admin');
    },
    destroyShoe(shoe) {
      shoe.destroyRecord();
      this.transitionTo('admin');
    },
    update(shoe, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          shoe.set(key,params[key]);
        }
      });
      console.log('SHOW ME');
      shoe.save();
      this.transitionTo('admin');
    }
  }
});
