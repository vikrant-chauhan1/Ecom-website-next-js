"use client";
import { useSession,signOut } from "next-auth/react";
import "./homepage.css"

export default function Home() {
  const {data : session} = useSession();
  const handleclick= async(e)=>{
    window.location.href="/products";
  }
  



  return (
    <div >
      {session ? (
        <>
          <h1>Welcome, {session.user.email} !</h1>
          {session.user.image && <img src={session.user.image} alt="User Profile" />}
          <button onClick={()=>signOut()}>Logout</button>
          <button onClick={handleclick}>Products</button>
        
        
        </>
      ):(
        <a href="/login">Login </a>
      
      )}
      
      
      

      
      
    </div>
    
    
    
  );
}
