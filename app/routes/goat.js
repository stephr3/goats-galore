import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('goat', params.goat_id);
  },
  actions: {
    transitionCart() {
      this.transitionTo('cart');
    }
  }
});
