import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this.get('goat'));
  }),
  ratingAverage: Ember.computed('comments.@each.rating', function(){
    var total = 0;
    (this.get('comments')).forEach(function(comment){
      console.log(comment.get('rating'));
      total += comment.get('rating');
      console.log(total);
    });

    return Math.round(total/this.get('comments').get('length'));
  }),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.sendAction('transitionCart');
    },
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    },
    saveComment(params) {
      this.sendAction( 'saveComment', params);
    }
  }
});
