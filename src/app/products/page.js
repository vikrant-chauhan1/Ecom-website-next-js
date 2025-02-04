"use client";

import {useEffect,useState} from "react";
import Link from "next/link";
export default function ProductListing(){
    const [products,setproducts] = useState([]);

    useEffect(()=>{
        async function fetchProducts() {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setproducts(data);

        }
        fetchProducts();
    },[]);

    return(
        <div>
            <h1>Product Listing</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
                {products.map((product)=>(
                    <div key={product.id} style={{border:"1px solid #ddd",padding:"10px"}}>
                        <img src={product.image} alt={product.title} width="100" height="100px" />
                        <h3>{product.title}</h3>
                        <p>$ {product.price}</p>
                        <Link href={`/products/${product.id}`}>
                            <button>View Details</button>
                        
                        
                        </Link>
                       
                        
                    </div>
                    
    
                ))}
    
            </div>
        </div>
    );
}



