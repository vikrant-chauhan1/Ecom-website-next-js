"use client";
import { useSession } from "next-auth/react";

export default function ProductsPage(){
    const {data : session,status}= useSession();

    if (status==="loading"){
        return(
            <div>Loading...</div>
        );
    }
    if(!session){
        return(
            <div>
                <h1>You must be logged in to view this content.</h1>
                <a href="/login">Go to Login</a>
            </div>
        );
    }
    return(
        <div>
            <h1>Product List</h1>
            <p>Welcome, {session.user.email}!</p>
        </div>
    );
}


