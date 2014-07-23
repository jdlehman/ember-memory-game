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
  FIXTURES: [
    {
      id: 0,
      image: 'http://media1.s-nbcnews.com/j/streams/2012/December/121204/1C5045406-tdy-121204-puppy-names-02.blocks_desktop_large.jpg',
      selected: false,
      matched: false,
      game: 0
    },
    {
      id: 1,
      image: 'http://m.c.lnkd.licdn.com/mpr/mpr/p/4/005/05b/0ad/17ef3d8.jpg',
      selected: false,
      matched: false,
      game: 0
    },
    {
      id: 2,
      image: 'http://wallpaperhall.com/wp-content/uploads/2014/06/puppy-cutest-puppy-ever-koxlx6zg.jpg',
      selected: false,
      matched: false,
      game: 0
    },
    {
      id: 3,
      image: 'https://my.vetmatrixbase.com/clients/12679/images/Gorgeous_puppies.jpg',
      selected: false,
      matched: false,
      game: 0
    }
  ]
});

export default Card;
