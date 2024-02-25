import type { Meta, StoryObj } from '@storybook/react';
import ComponentHierarchy from '../../components/samples/05_hierarchy';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Sample/05 - Component Hierarchy',
    component: ComponentHierarchy,
} satisfies Meta<typeof ComponentHierarchy>;

export default meta;

const languages = ["Javascript", "Python", "Java", "C#"];
const frameworks = [
  { name: "React", url: "https://facebook.github.io/react/" },
  { name: "Vue", url: "https://vuejs.org/" },
  { name: "Angular", url: "https://angularjs.org/" },
];
const data ={frameworks:{type:"Ranked client-side frameworks", bestFrameworks: frameworks}, languages:{heading:"Ranked Server-side", list:  languages}}

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
       tech: data 
    }
};