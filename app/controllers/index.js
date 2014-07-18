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
          completed: false
        });
        // get images from google images
        var adapter = ImageAdapter.create();
        adapter.find(category).then(function(images) {
          images.map(function(image) {
            // create card from image data
            var card = controller.store.createRecord('card', {
              image: image.imageName,
              selected: false,
              matched: false,
              game: game
            });
            // associate card to game
            game.get('cards').then(function(cards) { // need this b/c cards assoc is async
              cards.addObject(card);
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
  }
});
