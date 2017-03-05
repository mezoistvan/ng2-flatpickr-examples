import { TesztPage } from './app.po';

describe('teszt App', () => {
  let page: TesztPage;

  beforeEach(() => {
    page = new TesztPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
