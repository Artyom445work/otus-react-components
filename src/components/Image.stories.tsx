// src/components/Image.stories.tsx
import React from 'react';
import Image, { ImageProps } from './Image'; // Импортируем компонент и его пропсы

export default {
    title: 'Components/Image',
    component: Image,
};

// Указываем тип для args
const Template: React.FC<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: '/img/test-image.png', // Путь к изображению
    alt: 'Пример изображения',
};