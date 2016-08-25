import Ember from 'ember';

export function starRating(params) {
  var comment = params[0];
  if(comment === 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  } else if (comment === 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (comment === 3){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (comment === 4){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');     
  }
}

export default Ember.Helper.helper(starRating);
