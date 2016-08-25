import Ember from 'ember';

export default Ember.Component.extend({
  ratings: ["*", "**", "***", "****", "*****"],
  addNewComment: false,
  actions: {
    addNewComment(){
      this.set('addNewComment', true);
    },
    saveComment(){
      var params = {
        rating: this.get('rating'),
        text: this.get('text'),
        author: this.get('author'),
        date: Date.now(),
        goat: this.get('goat')
      };
      this.sendAction('saveComment', params);
      this.set('addNewComment', false);
    }
  }
});
