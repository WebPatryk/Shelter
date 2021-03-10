import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

const Template = args => <Button {...args}>Login</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button secondary',
};
