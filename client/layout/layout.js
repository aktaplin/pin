Template.layout.tagListReturn = function() {
  Meteor.call('getTags', function(err, results) {
    console.log(results.content);
    Session.set('tags', JSON.parse(results.content));
  });
  return Session.get('tags');
}

Template.layout.tagBookmarksListReturn = function(tag) {
  Meteor.call('getBookmarksByTag', tag, function(err, results) {
    console.log(results.content);
    Session.set('bookmarksByTag', JSON.parse(results.content));
  });
  return Session.get('bookmarksByTag');
}

UI.registerHelper('addKeys', function(all) {
  return _.map(all, function(i, k) {
    return {
      key: k,
      value: i
    };
  });
});
