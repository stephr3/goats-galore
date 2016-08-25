import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this.get('goat'));
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
