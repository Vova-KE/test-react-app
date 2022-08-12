import { useState, useEffect, useCallback } from "react";
import { fetchCartItems, deleteItem, addItem, updateItem } from "../components/api/cartApi";


const useCartData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

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
    }, [setItems]
    )

    const handleRemoveItem = useCallback((id) => {
        setIsLoading(true);

        deleteItem(id)
            .then(() => {
                setItems((prev) => prev.filter((item) => item.id !== id))
            })
            .catch(({ message }) => setError(message))
            .finally(() => {
                setIsLoading(false);
            });
    }, [setIsLoading]
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
            .catch(({ message }) => setError(message))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        try {
            setItems(JSON.parse(localStorage.getItem('cart')));
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return {
        isLoading, items, error, handleChangeCount, handleRemoveItem, handleAddItem
    }
};

export default useCartData;