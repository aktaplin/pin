Template.tags.tagList = function() {
  return Tags.find({}, {
    sort: {
      count: -1
    }
  }).fetch();
};

Template.layout.events = {
  'click .tag': function(event) {
    console.log(event.target.id)
    Session.set('clickedTag', event.target.id)
    Session.set('bookmarkDetail', true)
  }
};
