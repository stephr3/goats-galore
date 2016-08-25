import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  text: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  goat: DS.belongsTo('goat', {async: true})
});
