(function(exports){

  function NewsItem(story) {
  this.headline = undefined;
  this.body = undefined;
  this.image = undefined;
  this.populatesStory(story);
  }

  NewsItem.prototype.populatesStory = function(object) {
    this.headline = object.webTitle;
    this.body = object.blocks.bodyHtml;
    this.image = object.blocks.main.elements[0].assets[1].file;
  };
  exports.NewsItem = NewsItem;
})(this);
