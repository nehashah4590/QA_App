import NextAuth from "next-auth/next";
import GoogleProvider  from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ??"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ??"",

        }),
        CredentialsProvider({
       
            name: "Credentials",
           
            credentials: { },
            async authorize(credentials, req) {
                const { username, password } = credentials;
              try{
                const user =  await axios.post(`${process.env.NEXT_PUBLIC_HOST}/login/`,{
                  email:username,
                  password:password
                  
                },
                {headers:
                {
                   'Content-Type':'application/json',
                   'Accept':'*/*'
                }})
               
              if (user) {
                return user.data;
                
              } else{ return null;}
              }
           catch (e) {
            throw new Error('Authentication failed');
            
          }
             
            }
          })
    ],

  session:{
    strategy:"jwt",
  },

  pages: {
    signIn: "../../auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      return {...token, ...user};
    },
    async session({ session, token,user}) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;
      return session;
    },
  }

});

export { handler as GET, handler as POST };
