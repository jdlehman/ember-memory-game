import Ember from 'ember';
import ImageAdapter from 'ember-memory-game/adapters/image';

export default Ember.Controller.extend({
  category: '',
  actions: {
    newGame: function() {
      var category = this.get('category');
      if(category) {
        var controller = this;
        // create game
        var game = controller.store.createRecord('game', {
          completed: false,
          title: category
        });
        // get images from google images
        var adapter = ImageAdapter.create();
        adapter.find(category).then(function(images) {
          images.map(function(image) {
            // associate card to game
            game.get('cards').then(function(cards) { // need this b/c cards assoc is async
              // add card twice
              cards.addObject(controller.newCard(image, game));
              cards.addObject(controller.newCard(image, game));
            });
          });
          // transition to game route after adding all cards to game
          controller.transitionToRoute('game', game);
          controller.set('category', '');
        });
      }
      else {
        alert('Please enter a category');
      }
    }
  },
  newCard: function(image, game) {
    // create card from image data
    return this.store.createRecord('card', {
      image: image.imageName,
      selected: false,
      matched: false,
      randomId: Math.random(),
      game: game
    });
  }
});
