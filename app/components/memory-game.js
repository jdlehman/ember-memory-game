import Ember from 'ember';

export default Ember.Component.extend({
  firstCard: null,
  handleMatch: function(card1, card2) {
    if(card1.image === card2.image) {
      card1.toggleProperty('matched');
      card2.toggleProperty('matched');
    }
  },
  reset: function(card1, card2) {
    Ember.run.later(this, function() {
      card1.toggleProperty('selected');
      card2.toggleProperty('selected');
      this.set('firstCard', null);
    }, 500);
  },
  actions: {
    checkMatch: function(card) {
      var card1 = this.get('firstCard');
      var card2 = card;
      if(card1) {
        this.handleMatch(card1, card2);
        this.reset(card1, card2);
      }
      else {
        this.set('firstCard', card);
      }
    }
  }
});
