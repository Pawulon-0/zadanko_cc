import { ZadankoCcPage } from './app.po';

describe('zadanko-cc App', () => {
  let page: ZadankoCcPage;

  beforeEach(() => {
    page = new ZadankoCcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
