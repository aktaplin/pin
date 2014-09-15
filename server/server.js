Meteor.methods({
  'getTags': function() {
    return Meteor.http.call('GET', 'https://api.pinboard.in/v1/tags/get?auth_token=aktaplin:9A298BE025EAD8D36ED5&format=json');
  },

  'getBookmarksByTag': function(tag) {
    return Meteor.http.call('GET', 'https://api.pinboard.in/v1/posts/all?auth_token=aktaplin:9A298BE025EAD8D36ED5&format=json&tag=' + tag);
  },

  'tagListReturn': function() {
    Meteor.call('getTags', function(err, results) {
      console.log(results.content);
      // Session.set('tags', JSON.parse(results.content)); PUT THEM IN THE COLLECTION HERE//
    });
    //return Session.get('tags');//
  },
});
