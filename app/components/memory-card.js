import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card'],
  classNameBindings: ['isSelected', 'isMatched'],
  isSelected: Ember.computed.alias('selected'),
  isMatched: Ember.computed.alias('matched'),
  selectable: function() {
    return !(this.get('selected') || this.get('matched'));
  }.property('selected', 'matched'),
  actions: {
    select: function() {
      if(this.get('selectable')) {
        this.toggleProperty('selected');
        this.sendAction('select', this);
      }
    }
  }
});
