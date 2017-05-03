import { Clase5Page } from './app.po';

describe('clase5 App', () => {
  let page: Clase5Page;

  beforeEach(() => {
    page = new Clase5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
