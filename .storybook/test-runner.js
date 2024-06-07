// import { waitForPageReady } from "@storybook/test-runner";

import { toMatchImageSnapshot } from "jest-image-snapshot";

const customSnapshotsDir = `${process.cwd()}/__image_snapshots__`;

const config = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Waits for the page to be ready before taking a screenshot to ensure consistent results
    // [Q] 公式では以下記載されているが、これを記載すると、タイムアウトする…検索してもめぼしい情報がない
    // await waitForPageReady(page);

    // To capture a screenshot for for different browsers, add page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};

export default config;
