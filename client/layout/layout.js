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
