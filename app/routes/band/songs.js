import Ember from 'ember';
import Song from '../../models/song';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('band').get('songs');
  },

  actions: {
    didTransition: function() {
      var band = this.modelFor('band');
      var name = band.get('name')
      Ember.$(document).attr('title', `${name} songs - Rock`);
    },

    createSong: function() {

      var controller = this.get('controller');
      var band = this.modelFor('band');

      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });
      song.save().then(() => {
        controller.set('title', '');
      });
    },

    updateRating: function(params) {
      var song = params.item;
      var rating = params.rating;

      if (song.get('ratings') === rating) {
        rating = 0;
      }

      song.set('rating', rating);
      song.save();
    }
  }
});
