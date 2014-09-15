Template.tagBookmarks.tagBookmarksListReturn = function() {
  Meteor.call('getBookmarksByTag', Session.get('clickedTag'), function(err, results) {
    console.log(results.content);
    Session.set('bookmarksByTag', JSON.parse(results.content));
  });
  return Session.get('bookmarksByTag');
};

Template.tagBookmarks.clickedTag = function() {
  Session.get('clickedTag')
}

Template.tagBookmarks.rendered = function() {
  $('#bookmarks').height($("#bookmarksWrapper").height());
};
