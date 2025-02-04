"use client"

import { useEffect,useState } from "react"
import { useParams } from "next/navigation"

export default function productDetails(){
    const { id }= useParams(); // we destructure he id from the params
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        async function fetchProduct(){
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
        }
        if(id) fetchProduct();
    },[id]);

    if(!product){
        return(
            <p>Loading...</p>
        );
    }

    return(
        <div style={{padding:"20px"}}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width="200" height="200"/>
            <p>{product.description}</p>
            <p><strong>Price:</strong>${product.price}</p>
            <button>Add to Cart</button>

        </div>


    );
}