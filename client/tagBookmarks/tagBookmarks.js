Template.tagBookmarks.clickedTag = function() {
  Session.get('clickedTag')
};

Template.tagBookmarks.rendered = function() {
  $('#bookmarks').height($("#bookmarksWrapper").height());
};
