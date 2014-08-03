import Ember from 'ember';

export default Ember.Component.extend({
  // selectedCards: Ember.computed.alias('selected'),
  firstCard: null,
  handleMatch: function(card1, card2) {
    if(card1.image === card2.image) {
      card1.set('matched', true);
      card2.set('matched', true);
    }
  },
  reset: function(card1, card2) {
    card1.set('selected', false);
    card2.set('selected', false);
    this.set('firstCard', null);
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
