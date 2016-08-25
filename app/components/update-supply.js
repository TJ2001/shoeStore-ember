import Ember from 'ember';


export default Ember.Component.extend({
  updateShoeForm: false,
  actions: {
    shoeFormShow() {
      this.set('updateShoeForm', true);
    },
    update(shoe) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        type: this.get('type'),
        image: this.get('image'),
        size: this.get('size'),
      };
      this.set('updateShoeForm', false);
      this.sendAction('update', shoe, params);
    }
  }
});
