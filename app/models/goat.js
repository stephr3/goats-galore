import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  breed: DS.attr(),
  price: DS.attr('number'),
  image: DS.attr(),
  description: DS.attr(),
  category: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
