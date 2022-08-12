import { useState, useEffect, useCallback, useMemo } from "react";
import CartInputForm from "../../components/CartInputForm";
import Loader from "../../components/Loader";
import CartItemList from "../../components/CartItemList";
import TotalAmount from "../../components/TotalAmount";
import { fetchCartItems, deleteItem, addItem, updateItem } from "../../components/api/cartApi";
import UseEffComponent from "../../components/UseEffComponent";

// const initialState = [
//     { id: '1', name: 'printer', price: 110, count: 2, extendedGuarantee: false },
//     { id: '2', name: 'RAM', price: 30, count: 0, extendedGuarantee: false },
//     { id: '3', name: 'MB', price: 150, count: 1, extendedGuarantee: true },
//     { id: '4', name: 'mouse', price: 15, count: 4, extendedGuarantee: false },
// ];

const Cart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    const UseEffComponentItems = useMemo(
        () => items.filter(item => item.count === 0),
        [items]
    );

    // const handleDecrement = (id) => {
    //     setItems(prev =>
    //         prev.map(item =>
    //             item.id === id
    //                 ? {
    //                     ...item,
    //                     count: item.count > 0 ? item.count - 1 : 0,
    //                 }
    //                 : item
    //         )
    //     )
    // };

    // const handleIncrement = (id) => {0
    //         prev.map(item =>
    //             item.id === id
    //                 ? {
    //                     ...item,
    //                     count: item.count + 1,
    //                 }
    //                 : item
    //         )
    //     )
    // };

    const handleChangeCount = useCallback((id, step) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const updatedItem = {
                        ...item,
                        count: item.count + step >= 0 ? item.count + step : item.count,
                    };

                    updateItem(id, { count: updatedItem.count });

                    return updatedItem;
                } else {
                    return item;
                }
            })
        );
    },[setItems]
    )

    const handleRemoveItem = useCallback((id) => {
        setIsLoading(true);

        deleteItem(id)
            .then(() => {
                setItems((prev) => prev.filter((item) => item.id !== id))
            })
            .catch(({message}) => setError(message))
            .finally(() => {
                setIsLoading(false);
            });
    },[setIsLoading]
    )
        

    const handleAddItem = (newItem) => {
        setIsLoading(true);

        addItem(newItem)
            .then((data) => {
            setItems((prev) => [...prev, data])
            })
            .catch(({ message }) => setError(message))
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setIsLoading(true);

        fetchCartItems()
            .then(setItems)
            .catch(({message}) => setError(message))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    //не работает - после перезагрузки старнийцы данные в локалсторедж исчезают
    useEffect(() => {
        // console.log('componentDidMount');

        // setIsLoading(true);
        // setTimeout(() => {
        //     setItems(initialState);
        //     setIsLoading(false);
        // }, 2000)
        // try {
        //     setItems(JSON.parse(localStorage.getItem('cart')));
        // } catch (error) {
        //     console.log(error.message);
        // }
    //     try {
    //         setItems(JSON.parse(localStorage.getItem('cart')));
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }, []);
    try {
      setItems(JSON.parse(localStorage.getItem('cart')));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

    //не работает - после перезагрузки старнийцы данные в локалсторедж исчезают
    // useEffect(() => {
    //     console.log('componentUpdateMount');
    //     localStorage.setItem('cart', JSON.stringify(items));
    // }, [items]);

    //не работает - после перезагрузки старнийцы данные в локалсторедж исчезают
    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(items));
    // }, [items]);

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(items));
    // }, [items]);

    return (
        <div className="cart">
            <CartInputForm onSubmit={handleAddItem} />
            
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            
            <CartItemList
                items={items}
                onRemoveItem={handleRemoveItem}
                // onDecrement={handleDecrement}
                // onIncrement={handleIncrement}
                onChangeCount={handleChangeCount}
            />
            <TotalAmount items={items} />
            <UseEffComponent items={UseEffComponentItems} />
        </div>
    );
};

export default Cart;