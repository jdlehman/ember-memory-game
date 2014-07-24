import DS from 'ember-data';

var Card =  DS.Model.extend({
  // attributes
  image: DS.attr('string'),
  selected: DS.attr('boolean'),
  matched: DS.attr('boolean'),
  randomId: DS.attr('number'),
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
      randomId: 0.2,
      game: 0
    },
    {
      id: 1,
      image: 'http://m.c.lnkd.licdn.com/mpr/mpr/p/4/005/05b/0ad/17ef3d8.jpg',
      selected: false,
      matched: false,
      randomId: 0.32,
      game: 0
    },
    {
      id: 2,
      image: 'http://wallpaperhall.com/wp-content/uploads/2014/06/puppy-cutest-puppy-ever-koxlx6zg.jpg',
      selected: false,
      matched: false,
      randomId: 0.53,
      game: 0
    },
    {
      id: 3,
      image: 'https://my.vetmatrixbase.com/clients/12679/images/Gorgeous_puppies.jpg',
      selected: false,
      matched: false,
      randomId: 0.9,
      game: 0
    },
    {
      id: 4,
      image: 'http://media1.s-nbcnews.com/j/streams/2012/December/121204/1C5045406-tdy-121204-puppy-names-02.blocks_desktop_large.jpg',
      selected: false,
      matched: false,
      randomId: 0.3,
      game: 0
    },
    {
      id: 5,
      image: 'http://m.c.lnkd.licdn.com/mpr/mpr/p/4/005/05b/0ad/17ef3d8.jpg',
      selected: false,
      matched: false,
      randomId: 0.2,
      game: 0
    },
    {
      id: 6,
      image: 'http://wallpaperhall.com/wp-content/uploads/2014/06/puppy-cutest-puppy-ever-koxlx6zg.jpg',
      selected: false,
      matched: false,
      randomId: 0.3,
      game: 0
    },
    {
      id: 7,
      image: 'https://my.vetmatrixbase.com/clients/12679/images/Gorgeous_puppies.jpg',
      selected: false,
      matched: false,
      randomId: 0.1,
      game: 0
    }
  ]
});

export default Card;
