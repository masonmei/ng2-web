import { Ng2WebPage } from './app.po';

describe('ng2-web App', function() {
  let page: Ng2WebPage;

  beforeEach(() => {
    page = new Ng2WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
