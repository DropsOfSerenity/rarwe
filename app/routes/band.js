import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug);
  },

  afterModel: function(band) {
    // once we have model redirect to correct route based on whether model
    // contains a description.
    var description = band.get('description');
    if (Ember.isEmpty(description)) {
      this.transitionTo('band.songs');
    } else {
      this.transitionTo('band.details');
    }
  }
});
