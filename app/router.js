import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberMemoryGameENV.locationType
});

Router.map(function() {
  this.resource('game', { path: '/game/:game_id' });
  this.route('games');
});

export default Router;
