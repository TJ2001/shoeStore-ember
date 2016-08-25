import Ember from 'ember';

export default Ember.Component.extend({
    updateShoeForm: false,
    actions: {
      remove(item) {
        if (confirm('Are you sure you want to shoes from the store?')) {
        this.sendAction('destroyShoe', item);
        }
      },
      update(shoe, params) {
        this.sendAction('update', shoe, params);
      },
    }
});
