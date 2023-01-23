import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    item:[],
    totalAmount:0
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    return defaultCartState;
}

const CartProvider =(props)=>{
    const [cartstate , dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemHandler =(item) =>{
        dispatchCartAction({type:'ADD', item:item});

    }

    const removeItemHandler =(id) =>{
        dispatchCartAction({type:'REMOVE' , id :id})

    }

    const cartContext = {
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )


}
export default CartProvider;