import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(farm) {
      var container= this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(farm.get('latitude'), farm.get('longitude')),
        zoom: 15
      };
      var newMap = this.get('map').findMap(container, options);
      var markerOptions = {
        position: {lat: farm.get('latitude'), lng: farm.get('longitude')},
        map: newMap,
        title: 'Goats Galore Farm',
        icon: 'images/goat-512.png',
        draggable:true
      };
      var content = {
        content: "<h4>Come Visit Goats Galore!</h4>"
      };
      var infowindow = this.get('map').createInfoWindow(content);
      var marker = this.get('map').createMarker(markerOptions);
      marker.addListener('click', function() {
        infowindow.open(newMap, marker);
      });
    }

  }
});
