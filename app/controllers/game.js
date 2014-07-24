import Ember from 'ember';

export default Ember.ObjectController.extend({
  randomCards: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['randomId'],
      content: this.get('cards')
    });
  }).property('cards')
});
