(function(exports){
  function NewsController() {
    this.headlines = [];
    this.url = "https://content.guardianapis.com/politics";
    this.apiKey = "?api-key=56c1d77d-a2c7-4831-97a1-12dc38bf11fc";
    this.apiData;
    this.apiCall();
    this.addHeadlines();
  }

  NewsController.prototype.apiCall = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.url + this.apiKey, false);
    xhr.send();
    this.apiData = JSON.parse(xhr.response).response;
  };

  NewsController.prototype.addHeadlines = function() {
    for (i = 1; i < this.apiData.results.length; i++) {
      this.headlines.push(this.apiData.results[i].webTitle);
    };
  };

  NewsController.prototype.listHeadlines = function() {
    var headlineView = new HeadlineView(this.headlines);
    return headlineView.viewHeadlines();
  };

  NewsController.prototype.renderHeadlines = function() {
    var element = document.getElementById('news');
    element.innerHTML = this.listHeadlines();
  };
  exports.NewsController = NewsController;
})(this);