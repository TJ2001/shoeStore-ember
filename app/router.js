import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('admin');
  this.route('shoe', {path: '/shoe/:shoe_id'});
});

export default Router;
