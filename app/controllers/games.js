import Ember from 'ember';

export default Ember.Controller.extend({
  completeGames: function() {
    return this.get('model').filterBy('completed');
  }.property('model.@each.completed'),
  incompleteGames: function() {
    return this.get('model').rejectBy('completed');
  }.property('model.@each.completed'),
});
