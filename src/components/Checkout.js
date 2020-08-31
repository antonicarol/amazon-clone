import React from 'react'
import './css/Checkout.css';
import { useStateValue } from '../contexts/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492886.jpg" />
        
            {basket?.length === 0  ? (
                <div>
                    <h2>Your Shoopping Basket is Empty</h2>
                    <p> To buy one product click "Add to basket" near the product</p>
                </div>
            ) 
            : 
            (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    
                    {basket?.map(prod =>{
                         return <CheckoutProduct
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            image={prod.image}
                            price={prod.price}
                            rating={prod.rating}/>
                    })}
                
                </div>
            )}
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}            
        </div>
    )
}

export default Checkout
