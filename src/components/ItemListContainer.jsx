import { useState, useEffect } from "react";
import { getProducts } from "./asyncMock";
import { ItemList } from "./ItemList";
import './ItemListContainer.css'

const ItemListContainer = ({ gretting }) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts()
     .then(response => {
            setProducts(response)
        })

        .catch(error => {
            console.error(error)

        })

}, [])

return (
    <div className="List">
        <h1>{gretting}</h1>
        <ItemList products={products}/>

    </div>
)

}


export default ItemListContainer;
