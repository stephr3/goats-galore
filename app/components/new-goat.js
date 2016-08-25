import Ember from 'ember';

export default Ember.Component.extend({
  categories: ['Pet', 'Dairy', 'Yard', 'Sire', 'Mohair'],
  showNewForm: false,
  actions: {
    showNewForm() {
      this.set('showNewForm', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        breed: this.get('breed'),
        price: this.get('price'),
        image: this.get('image') ? this.get('image'): 'http://www.peta.org/wp-content/uploads/2016/02/Goats-maximili-602x403.jpg',
        description: this.get('description'),
        category: this.get('category')
      };
      this.set('showNewForm', false);
      this.sendAction('save', params);
      this.set('name', "");
      this.set('breed', "");
      this.set('price', "");
      this.set('image', "");
      this.set('description', "");
      this.set('category', "");
    }
  }
});
