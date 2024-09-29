import { within, userEvent, expect } from '@storybook/test';

import { HeroBanner } from './HeroBanner';

export default {
  title: 'Example/HeroBanner',
  component: HeroBanner,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};


// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const banner = {
  args: {
    title: 'HeroBanner',
    blurb: "Test Blurb ",
  },
};
