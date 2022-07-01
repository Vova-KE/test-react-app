import CartInputForm from "../../components/CartInputForm";
import Loader from "../../components/Loader";
import CartItemList from "../../components/CartItemList";
import TotalAmount from "../../components/TotalAmount";

const Cart = () => {
    return (
        <div className="cart">
            <CartInputForm />
            <Loader />
            <CartItemList />
            <TotalAmount />
        </div>
    )
};

export default Cart;