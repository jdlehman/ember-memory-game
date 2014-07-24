import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card'],
  classNameBindings: ['isSelected'],
  isSelected: Ember.computed.alias('selected'),
  actions: {
    select: function() {
      this.toggleProperty('selected');
    }
  }
});
