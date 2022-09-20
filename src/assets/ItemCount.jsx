import React, { useState, useContext } from "react";
import {CartContext} from "../CartContext";

const ItemCount = (props) => {
    const {item} = props;
    const {cart, setCart, addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(props.initial);
    const [itemStock, setItemStock] = useState(5);
    

    const decrementarCantidad = (valor) => {
        if (valor > 0) {
            setCounter(valor);
        }
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCounter(valor);
        }
    }

    const agregarProductos = () => {
        if (counter <= itemStock) {
            addItem(item, counter);
            setItemStock(itemStock - counter);
        }   
    }

    return (
        <div className="row">
            <div className=" text-center">
                <p><input type="button" className="btn" value="-" onClick={() => {decrementarCantidad(counter - 1)}} /> {counter} <input type="button" className="btn fondo_naranja mr-3" value="+" onClick={() => {incrementarCantidad(counter + 1)}} /></p>
                <p><input type="button" className="btn" value="Agregar" onClick={() => {agregarProductos()}} /></p>
                <p>Stock: {itemStock}</p>
            </div>        
        </div>
    )
};

export default ItemCount;