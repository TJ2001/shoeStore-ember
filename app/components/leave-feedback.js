import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      saveFeedback() {
        var params = {
          user: this.get('user'),
          comment: this.get('comment'),
          rating: this.get('rating'),
          shoe: this.get('shoe')
        };
        // this.set('addNewShoe', false);
        console.log(params);
        this.sendAction('saveShoe', params);
      }
  }
});
