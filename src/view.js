(function(exports) {
  function View(stories) {
    this.stories = stories;
  }

View.prototype.viewStories = function() {
  var headlineText = [];
  for (i = 0; i < this.stories.length; i++) {
    headlineText.push('<a href=#' + i + '>' + this.stories[i].webTitle);
  }
  return '<ul><li><div>' + headlineText.join('</a></div></li><li><div>') + '</a></div></li></ul>';
};
  exports.View = View;
})(this);
