import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:asc'],
  sortedFeedbacks: Ember.computed.sort('feedbacks', 'sortBy'),
});
