function HeadlineDisplayTest() {
  newsController = new NewsController();
  newsController.renderHeadlines();
  assert.ToEqual(document.getElementById('headlines').innerHTML, "<ul><li><div>Headline 1</div></li></ul>")
}

HeadlineDisplayTest();