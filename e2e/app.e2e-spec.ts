import { JenzPage } from './app.po';

describe('jenz App', () => {
  let page: JenzPage;

  beforeEach(() => {
    page = new JenzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
