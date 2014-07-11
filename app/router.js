import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberMemoryGameENV.locationType
});

Router.map(function() {
  this.resource('game', { path: '/game/:category' });
});

export default Router;
