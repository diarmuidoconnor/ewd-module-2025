import type { Meta, StoryObj } from '@storybook/react';
import ComponentHierarchy from '../../components/samples/05_hierarchy';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ComponentHierarchy> = {
  title: 'Sample/05 - Component Hierarchy',
  component: ComponentHierarchy,
};

export default meta;

const languages = ["Javascript", "Python", "Java", "C#"];
const frameworks = [
  { name: "React", url: "https://facebook.github.io/react/" },
  { name: "Vue", url: "https://vuejs.org/" },
  { name: "Angular", url: "https://angularjs.org/" },
];
const data = {
  frameworkProps: { type: "Ranked client-side frameworks", frameworks: frameworks },
  languageProps: { heading: "Ranked Server-side", languages: languages }
}

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    ...data //destructuring the data object to pass as the props to the component.
  }
};