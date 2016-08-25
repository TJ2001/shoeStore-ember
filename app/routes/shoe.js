import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('shoe', params.shoe_id);
  },
  actions: {
    saveShoe(params) {
      console.log(params);
      var newFeedback = this.store.createRecord('feedback', params);
      var shoe = params.shoe;
      shoe.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function() {
        return shoe.save();
      });
      this.transitionTo('shoe', params.shoe);
    }
  }
});





// export default Ember.Route.extend({
//   model() {
//     return Ember.RSVP.hash({
//       shoes: this.store.findRecord('shoe'),
//       feedbacks: this.store.findRecord('feedback')
//     });
//   }
// });
