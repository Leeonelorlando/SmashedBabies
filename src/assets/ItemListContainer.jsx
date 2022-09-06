import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ItemListContainer() {
    const productos = [
        { "id": 1, "nombre": "Cheeseburger" },
        { "id": 2, "nombre": "Fried Onion" }
    ];
}

    return(
        <div>
            <ItemList />
        </div>
    )
    
export default ItemListContainer;