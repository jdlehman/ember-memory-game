import DS from 'ember-data';

var Game = DS.Model.extend({
  // attributes
  completed: DS.attr('boolean'),
  title: DS.attr('string'),
  // associations
  cards: DS.hasMany('card', { async: true })
});

Game.reopenClass({
  FIXTURES: [
    {
      id: 0,
      title: 'game',
      cards: [0,1,2,3,4,5,6,7]
    }
  ]
});

export default Game;
