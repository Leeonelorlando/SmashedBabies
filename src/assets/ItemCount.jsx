import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial); 
    const [itemStock, setItemStock] = useState(stock); 
    const [itemAdd, setItemAdd] = useState(onAdd); 

    const decrementarCantidad = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarProductos = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);//
            setItemAdd(itemAdd + cantidad);//
        }  
    }

    return (
        <div className="container col-md-6 text-light">
            <div className="row">
                <div className="col-md-2">
                    <p className="text-center text-light">Cantidad de Productos</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrementarCantidad(cantidad - 1)}} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => {}} />
                        <input type="button" className="btn btn-danger" value="+" onClick={() => {incrementarCantidad(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-primary" value="Agregar" onClick={() => {agregarProductos()}} />      
                    </div>
                    <p>Productos Seleccionados: {itemAdd}</p>
                </div>
            </div>            
        </div>  
    )
};

export default ItemCount;