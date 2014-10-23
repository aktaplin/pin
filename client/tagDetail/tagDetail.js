Template.tagDetail.created = function() {
  $('#bookmarks').height($("#bookmarksWrapper").height());
  Session.set('tagIndex', 0);
};

Template.tagDetail.bookmarkData = function() {
  Meteor.call('getBookmarksByTag', Session.get('clickedTag'), function(err, results) {
    Session.set('bookmarksByTag', JSON.parse(results.content));
  });
  var index = Session.get('tagIndex');
  var bookmarks = Session.get('bookmarksByTag');
  console.log(bookmarks[index]);
  return bookmarkData = {
    bookmark : bookmarks[index],
  //START HERE, TRYING TO LOAD A COUNT INTO THE BOOKMARK DETAIL //
    count : Tags.find( {title: Session.get('clickedTag')}).fetch()[0].count
  }
};

Template.tagDetail.clickedTag = function() {
  return Session.get('clickedTag');
}

Template.tagDetail.events = {
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
