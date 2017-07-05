import { ExactNewAppPage } from './app.po';

describe('exact-new-app App', () => {
  let page: ExactNewAppPage;

  beforeEach(() => {
    page = new ExactNewAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
