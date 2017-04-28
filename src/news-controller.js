(function(exports){
  function NewsController() {
    this.url = "https://content.guardianapis.com/politics";
    this.apiKey = "?api-key=56c1d77d-a2c7-4831-97a1-12dc38bf11fc&show-blocks=all";
    this.apiData;
    this.stories = [];
  }

  NewsController.prototype.apiCall = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.url + this.apiKey, false);
    xhr.send();
    this.apiData = JSON.parse(xhr.response).response;
  };

  NewsController.prototype.addHeadlines = function() {
    for (i = 0; i < this.apiData.results.length; i++) {
      this.stories.push(new NewsItem(this.apiData.results[i]));
    }
  };

  NewsController.prototype.listHeadlines = function(headlines) {
    var headlineView = new View(headlines);
    return headlineView.viewStories();
  };

  NewsController.prototype.renderHeadlines = function() {
    this.apiCall();
    this.addHeadlines();
    var element = document.getElementById('news');
    element.innerHTML = this.listHeadlines(this.stories);
  };
  exports.NewsController = NewsController;
})(this);
