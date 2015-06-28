import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['rating-panel'],

  rating: 0,
  maxRating: 5,
  item: null,
  setAction: '',

  stars: function() {
    var rating = this.get('rating');
    var maxRating = this.get('maxRating');

    var fullStars = this.starRange(1, rating, 'full');
    var emptyStars = this.starRange(rating + 1, maxRating, 'empty');
    return fullStars.concat(emptyStars);
  }.property('rating', 'maxRating'),

  starRange: function(start, end, type) {
    var starsData = [];
    for (var i = start; i <= end; i++) {
      starsData.push({
        rating: i,
        full: type === 'full'
      });
    }
    return starsData;
  },

  actions: {
    set: function(rating) {
      this.sendAction('setAction', {
        item: this.get('item'),
        rating: rating
      });
    }
  }
});
