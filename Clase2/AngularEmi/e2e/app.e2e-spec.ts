import { AngularEmiPage } from './app.po';

describe('angular-emi App', () => {
  let page: AngularEmiPage;

  beforeEach(() => {
    page = new AngularEmiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
