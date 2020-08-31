import React from 'react'
import './css/CheckoutProduct.css'
import { useStateValue } from '../contexts/StateProvider'
function CheckoutProduct( { id, title, image, price, rating}) {

    const[{basket}, dispatch] = useStateValue();

    const removefromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>{
                        return <p>⭐️</p>
                    })}
                </div>

                <button onClick={removefromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
