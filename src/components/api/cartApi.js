import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/';

export const fetchCartItems = () => axios.get('/cart').then((res) => res.data);

export const deleteItem = (id) => axios.delete(`/cart/${id}`);

export const addItem = (nemItem) => axios.post('/cart', nemItem).then((res) => res.data);

export const updateItem = (id, updatedItem) => axios.post(`/cart/${id}`, updatedItem).then((res) => res.data);


// const URL = 'http://localhost:8080/cart';

// export const fetchCArtItems = () =>
//     fetch(URL).then((res) => res.json());

// export const deleteItem = (id) =>
//     fetch(`http://localhost:8080/cart/${id}`, {
//         method: "DELETE",
//     });

// export const addItem = (nemItem) => 
//     fetch(URL, {
//         method: "POST",
//         body: JSON.stringify(nemItem),
//         headers: {
//             'Content-Type':'application/json',
//         },
//     }).then((res) => res.json());