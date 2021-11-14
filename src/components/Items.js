import React from 'react'
import { useContext } from 'react'
import { ContexCart } from './Cart'

const Items = ({ id, description, title, img, quantity, price}) => {
    const { removeItem, increment, decrement } = useContext(ContexCart);
    return (
        <>
        <div className="items-info">
            <div className="product-img">
                  <img src={img} alt="img"></img>
            </div>
            <div className="title">
                <h2>{title}</h2>
                <p>{description}</p>

            </div>

            <div className="add-minus-quantity">

                <i className="fas fa-minus" onClick={() => decrement(id)}></i>
                <input type="text" placeholder={ quantity }></input>
                <i className="fas fa-plus add" onClick={() => increment(id)}></i>
            </div>

            <div className="price">
                <h3>{price}</h3>
            </div>

            <div className="remove-item">
            <i className="fas fa-trash-alt remove" onClick={() => removeItem(id)}></i>

            </div>
        </div>
            <hr /> 
        </>
    )
}

export default Items
