import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../components/card/card';


const githubUsername = process.env.REACT_APP_GITHUB_ACTOR; 
console.log(`El valor de REACT_APP_GITHUB_ACTOR es: ${githubUsername}`);
console.log(process.env);

export default {
  title: 'Card',
  component: Card,
} as Meta;


const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
CardComponent.args = {
  title: `${githubUsername}'s Card`, 
  content: 'This is the content of the card.',
};