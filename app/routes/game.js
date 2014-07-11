import Ember from 'ember';
import GameAdapter from 'ember-memory-game/adapters/game';

export default Ember.Route.extend({
  model: function(params) {
    var adapter = GameAdapter.create();
    return adapter.find(params.category);
  }
});
