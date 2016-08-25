import Ember from 'ember';

export default Ember.Controller.extend({
  shoppingCart: Ember.inject.service(),
  cartTotalDisplay: Ember.computed('shoppingCart.items.[]', function(){
    // {{debugger}}
    return this.get('shoppingCart').get('items').get('length');
  })
});
