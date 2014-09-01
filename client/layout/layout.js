Template.layout.tagListReturn = function() {
  Meteor.call('getTags', function(err, results) {
    console.log(results.content);
    Session.set('tags', JSON.parse(results.content));
  });
  return Session.get('tags');
};

UI.registerHelper('addKeys', function(all) {
  return _.map(all, function(i, k) {
    return {
      key: k,
      value: i
    };
  });
});

Template.layout.events = {
  'click .tag': function(event) {
    console.log(event.target.id)
    Session.set('clickedTag', event.target.id)
    Session.set('bookmarkDetail', true)
  }
};
