import { useState } from 'react';
import propTypes from 'prop-types';
import CartItem from "../CartItem";
import styles from "./style.module.css";

const CartItemList = ({items,  /*...rest,*/ onRemoveItem, onDecrement, onIncrement, onChangeCount }) => {
    const [visible, setVisible] = useState(false);
    const toggleList = () => setVisible(prev => !prev)

    
    return (
        <div className={styles.cartItemList}>
            <button type='button' onClick={toggleList}>Show/Hide</button>

            {visible && 
                items.map(( item ) => (
                <CartItem
                    key={item.id}
                    item={item}
                    // {...rest}
                    onRemoveItem={onRemoveItem}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    onChangeCount={onChangeCount}
                />
            ))
            }
    </div>
    )
}

CartItemList.propTypes = {
    items: propTypes.arrayOf(propTypes.shape ({
        id: propTypes.string.isRequired,
        })
    )
}

export default CartItemList;