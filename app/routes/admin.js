import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('goat');
  },
  actions: {
    save(params) {
      var newGoat = this.store.createRecord('goat', params);
      newGoat.save();
    }
  }
});
