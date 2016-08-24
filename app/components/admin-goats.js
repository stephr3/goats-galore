import Ember from 'ember';

export default Ember.Component.extend({
    editGoat: false,
    actions: {
      editGoat() {
        this.set('editGoat', true);
      },
      delete(goat) {
        this.sendAction('delete', goat)
      },
      edit(params, goat) {
        this.set('editGoat', false);
        this.sendAction('edit', params, goat);
      }
    }
});
