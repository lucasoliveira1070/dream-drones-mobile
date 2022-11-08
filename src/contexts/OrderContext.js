import { createContext, useState } from "react";
export const OrderContext = createContext(null);

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        let newOrderLista = orders;
        newOrderLista.push(order)
        setOrders(newOrderLista);
    }

    const listAll = () => {
        return orders;
    }

    const removeOrder = (order) => {
        let newOrderList = orders.filter(({ id }) => order.id !== id)
        setOrders(newOrderList);
    }

    return (
        <OrderContext.Provider value={{ addOrder, removeOrder, listAll }}>
            {children}
        </OrderContext.Provider>
    )
}