import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../components/card/card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const ExampleCard = Template.bind({});
ExampleCard.args = {
  title: 'Example Card',
  content: 'This is the content of the card.',
};