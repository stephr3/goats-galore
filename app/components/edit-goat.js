import Ember from 'ember';

export default Ember.Component.extend({
  categories: ['Pet', 'Dairy', 'Yard', 'Sire', 'Mohair'],
  actions: {

    edit(goat) {
      var params= {
        name: this.get('name'),
        breed: this.get('breed'),
        price: this.get('price'),
        image: this.get('image'),
        description: this.get('description'),
        category: this.get('category')
      };
      this.set('editGoat', false);
      this.sendAction('edit', params, goat);
      this.set('name', "");
      this.set('breed', "");
      this.set('price', "");
      this.set('image', "");
      this.set('description', "");
      this.set('category', "");
    }
  }
});
