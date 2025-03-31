import React, { useState } from 'react';

interface CollapsibleBlockProps {
    title: string;
    children: React.ReactNode;
}

const CollapsibleBlock: React.FC<CollapsibleBlockProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
            {isOpen && <div>{children}</div>}
        </div>
    );
};

export default CollapsibleBlock;