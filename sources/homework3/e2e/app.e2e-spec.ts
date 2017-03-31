import { Homework3Page } from './app.po';

describe('homework3 App', () => {
  let page: Homework3Page;

  beforeEach(() => {
    page = new Homework3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
