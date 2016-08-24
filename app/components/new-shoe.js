import Ember from 'ember';

export default Ember.Component.extend({
  addNewShoe: false,
  actions: {
    shoeFormShow() {
      this.set('addNewShoe', true);
    },

    save1() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        type: this.get('type'),
        size: this.get('size'),
        price: this.get('price'),
      };
      this.set('addNewShoe', false);
      this.sendAction('save2', params);
    }
  }
});
