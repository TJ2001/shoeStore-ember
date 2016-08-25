import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('shoe', params.shoe_id);
  },
  actions: {
    saveFeedback() {
      var params = {
        user: this.get('user'),
        comment: this.get('comment')};
      var newFeedback = this.store.createRecord('feedback', params);
        newFeedback.save();
        this.transitionTo('shoe');
      }
    }
});
