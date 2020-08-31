import React from 'react'
import './css/Product.css';
import { useStateValue } from '../contexts/StateProvider';

function Product({id, title, price, rating, image}) {

    const[{basket, user}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        if(user == null){
            return alert("You need to log in to Add to Cart!")
        } else{
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id, title, price, rating, image
            }
        })
    }
}
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                    Array(rating)
                    .fill()
                    .map((_) => <p>⭐️</p>)
                    }
                </div>
            
            </div>
            <img src={image} />
            <button onClick={addToBasket}> Add to basket</button>
        </div>
    )
}


export default Product
