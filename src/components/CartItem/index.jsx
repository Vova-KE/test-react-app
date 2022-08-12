import { memo } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import {CloseButton} from '../Button';

const useStyles = createUseStyles({
    cartItem: {
        display: 'flex',
        padding: 10,
        alignItems: 'center',
        columnGap: 30,
        backgroundColor: '#bada55',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    counter: {
        display: 'flex',
        columnGap: 10,
    },
    value({ item }) {
        return {
            color: !item.count ? 'red' : 'green',
            fontWeight: !item.count ? 700 : 400,
        }
    },
});

const CartItem = ({ item, onRemoveItem, /*onDecrement, onIncrement,*/ onChangeCount }) => {
    const styles = useStyles({ item });
    const amount = item.count * item.price;

    // const decrement = (id) => onDecrement(item.id);
    // const increment = () => onIncrement(item.id);
    const decrement = () => onChangeCount(item.id, -1);
    const increment = () => onChangeCount(item.id, 1);
    const remove = () => onRemoveItem(item.id);

    console.log('render item', item.id);

    return (
        <div className={styles.cartItem}>

            <div className={styles.column}>
                <span>{item.name}</span>
                <span>{item.price}$</span>
            </div>
    
            <div className={styles.counter}>
                <button onClick = {decrement}>-</button>
                <span className={styles.value}>{item.count}</span>
                <button onClick = {increment}>+</button>
            </div>

            <span>{amount}${item.extendedGuarantee && ' +10%'}</span>
            <CloseButton item={item} onRemoveItem={remove}/>
        </div>
    )
};

CartItem.propTypes = {
    items: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        extendedGuarantee: PropTypes.string.isRequired,
    }),
    onRemoveItem: PropTypes.func.isRequired,
    onChangeCount: PropTypes.func.isRequired,
    // onDecrement: PropTypes.func.isRequired,
    // onIncrement: PropTypes.func.isRequired,
}

export default memo(CartItem);