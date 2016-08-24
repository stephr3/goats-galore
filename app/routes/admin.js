import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('goat');
  },
  actions: {
    save(params) {
      var newGoat = this.store.createRecord('goat', params);
      newGoat.save();
    },
    delete (goat) {
      return goat.destroyRecord();
    },
    edit (params, goat) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          goat.set(key, params[key]);
        }
      });
      goat.save();
    }
  }
})
