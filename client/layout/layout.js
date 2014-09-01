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
  'click .tag': function() {
    if (Session.get('bookmarksOn') == 'true') {
      UI.remove(Template.test)
    }
    click = {}
    click['target'] = event.target.id
    UI.insert(UI.renderWithData(Template.test, click), $("#boing").get(0));
    Session.set('bookmarksOn', 'true')
  }
};
