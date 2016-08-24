import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('goat', {path: '/goat/:goat_id'});
  this.route('cart');
  this.route('pet');
  this.route('dairy');
  this.route('sire');
  this.route('mohair');
  this.route('yard');
  this.route('admin');
});

export default Router;
