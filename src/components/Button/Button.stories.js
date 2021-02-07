import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Buttonek',
  component: Button,
};

const Template = args => <Button {...args}>Purchase</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
