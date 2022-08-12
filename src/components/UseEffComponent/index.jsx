import { memo } from 'react';

const UseEffComponent = ({ items }) => {
    console.log('render UseEffComponent');

    return (
        <p>{items.length}</p>
    )
};

export default memo(UseEffComponent);