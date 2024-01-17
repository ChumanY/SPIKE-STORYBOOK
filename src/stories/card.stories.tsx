import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../components/card/card';


const githubUsername = process.env.GITHUB_ACTOR; 

export default {
  title: 'Card',
  component: Card,
  parameters: {
    path: `${githubUsername}/card`,
  },
} as Meta;


const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
CardComponent.args = {
  title: '${githubUsername} Card',
  content: 'This is the content of the card.',
};