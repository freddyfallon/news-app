function ViewTest() {
  var stories = [{
  headline: "Hello"
  }];
  var view = new View(stories);
  assert.toEqual(view.viewStories(), "<ul><li><div><a href=#0>Hello</a></div></li></ul>");
}

ViewTest();
