function HeadlineListTest() {
  var stories = [{
  webTitle: "Hello"
}];

  newsController = new NewsController();

  assert.toEqual(newsController.listHeadlines(stories), "<ul><li><div><a href=#0>Hello</a></div></li></ul>");
}

HeadlineListTest();
