function HeadlineDisplayTest() {
  newsController = new NewsController();
  newsController.renderHeadlines();

  assert.toEqual(document.getElementById('news').innerHTML, "<ul><li><div><a href=#0>MPs attack Boris Johnson remarks about strikes against Assad</div></li><li><div>What is a mugwump? An insult that only Boris Johnson would use</div></li><li><div>Hunt broke law by axing NHS 18-week treatment target, says Labour</div></li><li><div>Tony Blair refuses to back Jeremy Corbyn for prime minister</div></li><li><div>'Mugwump' attack has Lynton Crosby's fingerprints on it</div></li><li><div>Angela Merkel attacks British 'illusion' of keeping benefits of EU</div></li><li><div>'Mutton-headed old mugwump': Boris Johnson attacks Corbyn</div></li><li><div>The Snap: Boris Johnson takes on 'mutton-headed mugwump' Corbyn</div></li><li><div>Jeremy Corbyn to renew attack on Tories' housebuilding record</div></li></ul>")
}

// HeadlineDisplayTest();