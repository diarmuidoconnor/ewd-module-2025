import type { Meta, StoryObj } from '@storybook/react';
import JSXCollection from '../../components/samples/04_iteration';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta:Meta<typeof JSXCollection> = {
    title: 'Sample/04 -  Component collection (Iteration)',
    component: JSXCollection,
} ;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
        frameworks: [
            { name: "React", url: "https://facebook.github.io/react/" },
            { name: "Vue", url: "https://vuejs.org/" },
            { name: "Angular", url: "https://angularjs.org/" },
        ],
        type: "Most Popular client-side frameworks",
    }
};