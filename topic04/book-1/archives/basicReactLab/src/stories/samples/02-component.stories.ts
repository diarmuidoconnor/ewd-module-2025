import type { Meta, StoryObj } from '@storybook/react';

import JSXEnbeddedVars from '../../components/samples/02_embeddedVars';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Sample/02 - TSX embedded variable',
  component: JSXEnbeddedVars,
} satisfies Meta<typeof JSXEnbeddedVars>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
};