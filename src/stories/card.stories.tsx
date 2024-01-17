import React from 'react';
import Card, { CardProps } from '@/components/card/card';
import { Meta, Story } from '@storybook/react';

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