Template.tagBookmarks.created = function() {
  $('#bookmarks').height($("#bookmarksWrapper").height());
  Session.set('tagIndex', 0);
};

Template.tagBookmarks.bookmark = function() {
  Meteor.call('getBookmarksByTag', Session.get('clickedTag'), function(err, results) {
    Session.set('bookmarksByTag', JSON.parse(results.content));
  });
  var index = Session.get('tagIndex');
  var bookmarks = Session.get('bookmarksByTag');
  console.log(bookmarks[index]);
  return bookmarks[index];
};

Template.tagBookmarks.events = {
  'click #nextBookmark': function(event) {
    var count = Session.get('tagIndex');
    Session.set('tagIndex', ++count);
    console.log(Session.get('tagIndex'));
  },

  'click #prevBookmark': function(event) {
    var count = Session.get('tagIndex');
    Session.set('tagIndex', --count);
    console.log(Session.get('tagIndex'));
  },
};
