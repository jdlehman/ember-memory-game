import Ember from 'ember';
import ImageAdapter from 'ember-memory-game/adapters/image';

export default Ember.ObjectController.extend({
  category: '',
  actions: {
    newGame: function() {
      var category = this.get('category');
      if(category) {
        var controller = this;
        var adapter = ImageAdapter.create();
        adapter.find(category).then(function(images) {
          images.map(function(image) {
            var card = controller.store.createRecord('card', {
              image: image.imageName,
              selected: false,
              matched: false,
              game: controller.get('model')
            });

            // save card and associate to game
            card.save().then(function(card) {
              controller.get('model.cards').addObject(card);
              controller.transitionToRoute('game', controller.get('model'));
            });
          });
        });
      }
      else {
        alert('Please enter a category');
      }
    }
  }
});
