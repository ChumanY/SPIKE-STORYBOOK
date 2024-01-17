import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../components/card/card';

const githubUsername = process.env.GITHUB_ACTOR || 'defaultUsername'; 

export default {
  title: 'Card',
  component: Card,
  parameters: {
    githubActor: githubUsername,
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
CardComponent.args = {
  title: `${githubUsername}'s Card`,
  content: 'This is the content of the card.',
};
