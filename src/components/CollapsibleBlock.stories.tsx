import React from 'react';
import CollapsibleBlock from './CollapsibleBlock';

export default {
    title: 'Components/CollapsibleBlock',
    component: CollapsibleBlock,
};

const Template = (args) => <CollapsibleBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Нажмите, чтобы раскрыть',
    children: 'Это содержимое блока.',
};