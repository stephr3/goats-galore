import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('goat', params.goat_id);
  },
  actions: {
    transitionCart() {
      this.transitionTo('cart');
    },
    saveComment(params) {
      if (params.rating === '*'){
        params.rating = 1;
      } else if (params.rating ==='**') {
        params.rating = 2;
      } else if (params.rating === '***') {
        params.rating = 3;
      } else if (params.rating === '****') {
        params.rating = 4;
      } else {
        params.rating = 5;
      }
      var newComment = this.store.createRecord('comment', params);
      var goat = params.goat;
      goat.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return goat.save();
      });
      this.transitionTo('goat', params.goat);
    }
  }
});
