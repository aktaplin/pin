Template.layout.events = {
  'click .tag': function(event) {
    console.log(event.target.id)
    Session.set('clickedTag', event.target.id)
    Session.set('bookmarkDetail', true)
  }
};

UI.registerHelper('addKeys', function(all) {
  return _.map(all, function(i, k) {
    return {
      key: k,
      value: i
    };
  });
});

Template.layout.tagListReturn = function() {
  Meteor.call('tagListReturn')
}
