"use client";
import {signIn} from "next-auth/react"
import { useState } from "react";
import "../loginPage.css"

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin= async (e)=>{
        e.preventDefault();
        const res = await signIn("credentials",{
            redirect:false,
            email,
            password,
        });

        if(res?.error){
            alert("Invalid credentials");
        } else{
            window.location.href = "/"; // redirecting to homepage
        }
    };

    return(
        <div className="login-form">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                
                />
                <input 
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                
                />
                <button type="submit">Login</button>
            </form>
            
            <button onClick={()=>signIn("google", {callbackUrl:"/"})}>Login with Google</button>
        
        </div>
    )
    
}