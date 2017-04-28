function HeadlineListTest() {
  var stories = [{
  headline: "Hello"
  }];

  newsController = new NewsController();

  assert.toEqual(newsController.listHeadlines(stories), "<ul><li><div><a href=#0>Hello</a></div></li></ul>");
}

HeadlineListTest();
