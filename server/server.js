Meteor.methods({
  'getTags': function() {
    return Meteor.http.call('GET', 'https://api.pinboard.in/v1/tags/get?auth_token=aktaplin:9A298BE025EAD8D36ED5&format=json');
  },

  'getBookmarksByTag': function(tag) {
    return Meteor.http.call('GET', 'https://api.pinboard.in/v1/posts/all?auth_token=aktaplin:9A298BE025EAD8D36ED5&format=json&tag=' + tag);
  },

  'tagListReturn': function() {
    Meteor.call('getTags', function(err, results) {
      var tags = JSON.parse(results.content);
      console.log(tags);
      for (var key in tags) {
        Tags.insert({
          title: key,
          count: tags[key],
          user: Meteor.user()
        });
      }

    });
    //return Session.get('tags');//
  },
});

Meteor.startup(function () {
  if (Meteor.isServer) {
    Tags.remove({});
  }
});
