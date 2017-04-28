(function(exports) {
  function View(stories) {
    this.stories = stories;
  }

View.prototype.viewStories = function() {
  var html = "<ul>"
  var headlineText = [];
  var storyImage = [];
  for (i = 0; i < this.stories.length; i++) {
    html+= "<li><div><a href=#" + i + ">" + this.stories[i].headline + "</a>" +
    "<br>" + "<img src='" + this.stories[i].image + "' height='300'>"
  }
  html+= "</ul>"
  return html
};
  exports.View = View;
})(this);
