const CartItem = () => {
    return (
        <div className="cart-item">
        <span>printer</span>
        <span>100$</span>
    
        <div>
            <button>-</button>
            <span>2</span>
            <button>+</button>
        </div>

        <span>200$</span>
        <button>x</button>
    </div>
    )
};
export default CartItem;