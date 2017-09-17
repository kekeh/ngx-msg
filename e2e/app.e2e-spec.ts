import { MydaterangepickerPage } from './app.po';

describe('mydaterangepicker App', () => {
  let page: MydaterangepickerPage;

  beforeEach(() => {
    page = new MydaterangepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
