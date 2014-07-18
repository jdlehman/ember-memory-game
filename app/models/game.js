import DS from 'ember-data';

var Game = DS.Model.extend({
  // attributes
  completed: DS.attr('boolean'),
  title: DS.attr('string'),
  // associations
  cards: DS.hasMany('card', { async: true })
});

Game.reopenClass({
  FIXTURES: []
});

export default Game;
