import React from 'react'
import './Item.css'

export const Item = ({id,name,img,price,stock}) => {
  return (
    <article className="CartItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}    
            </h2>
        </header>

        <picture>

            <img className="ItemImg" src={img} alt={name} />

        </picture>

    <section>

        <p className="Info"> Precio: {price} </p>

        <p className="Info"> Stock Disponible: {stock} </p>

    </section>

    <footer className="ItemFooter">
        <button className="Option">Ver detalle</button>
        
    </footer>
    </article>
  )
}

export default Item
