import Ember from 'ember';

export default Ember.Object.extend({
  find: function(category) {
    return Ember.$.getJSON('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&callback=?&q=' + category)
      .then(function(response) {
        return response.responseData.results.map(function(result) {
          return {
            imageName: result.unescapedUrl
          };
        });
      });
  }
});
