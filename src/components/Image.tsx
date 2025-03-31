// src/components/Image.tsx
import React from 'react';

export interface ImageProps {
    src: string;
    alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />;
};

export default Image;