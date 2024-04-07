import { createContext, useEffect, useState } from "react"
import {food_list,market_list} from '../assets/assets/assets'


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        //first item in cart
        if(!cartItems[itemId])
        {
            setCartItems((prev) =>({...prev,[itemId]:1}))
        }
        else{ // already available in cart
           setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId) => {
       setCartItems((prev)=> ({...prev,[itemId]: prev[itemId]-1}))
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems])

   // access value through context
    const ContextValue = {
        food_list,
        market_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart


    }
    return(
        <StoreContext.Provider value = {ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider