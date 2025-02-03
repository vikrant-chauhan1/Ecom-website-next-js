import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,

        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"Email",type:"email"},
                password:{label:"Password",type:"password"},

            },
            async authorize(credentials){
                // we make a dummy user here 
                const user = {email:"user@example.com",password:"password123"};
                if(credentials.email===user.email && credentials.password === user.password){
                    return {id:1,email:user.email};
                }
                return null;
            }
        })
    ],
    session :{
        stratergy:"jwt",
        maxAge:60*60*3, // session expires in 3 hours
        /* updateAge:60*60 session will be refreshed every one hour to see if the user is active and increase the age plus one hour  */
    },
    pages:{
        signIn:"/login",
    },
    callbacks:{
        async jwt({token,user}){
            
            if(user){
                token.id = user.id;
                token.email= user.email;

            }
            return token;

        },
        async session({session,token}){
            session.id = token.id;
            session.email= token.email;
            return session;
        },
    },
    
};

export default NextAuth(authOptions);