import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model() {
    // var goatList = this.store.findAll('goat');
    return this.infinityModel('goat', {perPage: 6, startingPage: 1});
  }
});
