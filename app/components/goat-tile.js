import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this.get('goat'));
  }),
  ratingAverage: Ember.computed('comments.@each.rating', function(){
    var total = 0;
    (this.get('comments')).forEach(function(comment){
      total += comment.get('rating');
    });

    return Math.round(total/this.get('comments').get('length'));
  }),
});
