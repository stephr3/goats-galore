import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },

  createMarker(markerOptions) {
    return new this.googleMaps.Marker(markerOptions);
  },
  createInfoWindow(content) {
    return new this.googleMaps.InfoWindow(content);
  }
});
