Template.tags.tagList = function() {
  return Tags.find({}, {
    sort: {
      count: -1
    }
  }).fetch();
}
