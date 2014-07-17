import DS from 'ember-data';

var Card =  DS.Model.extend({
  // attributes
  image: DS.attr('string'),
  selected: DS.attr('boolean'),
  matched: DS.attr('boolean'),
  // associations
  game: DS.belongsTo('game')
});

Card.reopenClass({
  FIXTURES: []
});

export default Card;
