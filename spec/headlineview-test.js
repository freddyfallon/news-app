function HeadlineViewTest() {
  var headlines = ["Hello", "Bro"]
  var headlineView = new HeadlineView(headlines);

  assert.ToEqual(headlineView.viewHeadlines(), "<ul><li><div>Hello</div></li><li><div>Bro</div></li></ul>")
};

HeadlineViewTest();