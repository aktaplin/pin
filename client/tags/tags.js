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
    Session.set('tagOn', true)
    Session.set('tagIndex', 0)
  },

  'click #close': function() {
    Session.set('tagOn', false)
  },
};

Template.tags.tagOn = function() {
  return Session.get('tagOn')
};
