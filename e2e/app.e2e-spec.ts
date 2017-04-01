import { Ng2FileSystemBoazPage } from './app.po';

describe('ng2-file-system-boaz App', function() {
  let page: Ng2FileSystemBoazPage;

  beforeEach(() => {
    page = new Ng2FileSystemBoazPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fs works!');
  });
});
