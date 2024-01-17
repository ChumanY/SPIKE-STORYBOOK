import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../components/card/card';


const githubUsername = process.env.GITHUB_ACTOR; 

export default {
  title: 'Card',
  component: Card,
  parameters: {
    path: `componente/${githubUsername}`, 
  },
} as Meta;


const Template: Story<CardProps> = (args) => <Card {...args} />;

export const ExampleCard = Template.bind({});
ExampleCard.args = {
  title: 'Example Card',
  content: 'This is the content of the card.',
};