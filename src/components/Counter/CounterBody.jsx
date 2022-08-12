import { memo } from 'react';

const CounterBody = ({ value }) => {
    console.log('render component');
    return <span>{value}</span>;
};

export default memo(CounterBody);