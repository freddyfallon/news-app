(function(exports) {
  function HeadlineView(headlines) {
    this.headlines = headlines;
  };

HeadlineView.prototype.viewHeadlines = function() {
  var headlineText = [];
  for (i = 0; i < this.headlines.length; i++) {
    headlineText.push(this.headlines[i])
  };
  return "<ul><li><div>" + headlineText.join("</div></li><li><div>") + "</div></li></ul>"
};
  exports.HeadlineView = HeadlineView;
})(this);