import { browser } from 'protractor';

import { AppPage } from './app.po';

describe('con-fusion App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to about us page by clicking on the link', () => {
    page.navigateTo('/');

    let navlink = page.getAllElements('a').get(1);
    navlink.click();

    expect(page.getParagraphText('h3')).toBe('About Us')
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');

    let newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author');

    let newComment = page.getElement('textarea');
    newComment.sendKeys('Test Comment');

    let slider = page.getElementById('slider');
    expect(slider).not.toBeNull();
    // choose rating 3
    browser.actions().dragAndDrop(
      slider,
      {x:0, y:10}
    ).perform();

    browser.sleep(2000);

    let newSubmitButton = page.getElement("button[type=submit]");
    newSubmitButton.click();

    //browser.pause(); // see https://github.com/angular/protractor/issues/4307
  });

});
