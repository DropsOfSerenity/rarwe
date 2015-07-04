import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('band');
  },

  actions: {
    didTransition: function() {
      Ember.$(document).attr('title', 'Bands - Rock');
    },

    createBand: function() {
      var controller = this.get('controller');

      var band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(() => {
        controller.set('name', '');
        this.transitionTo('band.songs', band);
      });
    }
  }
});
