import Ember from 'ember';

export function cartTotal(params) {
  var goats = params[0];
  var total = 0;
  goats.forEach(function(goat){
    total += goat.get('price');
  });
  return Ember.String.htmlSafe('<span>'+ total +'</span>');
}

export default Ember.Helper.helper(cartTotal);
