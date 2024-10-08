import { SignUp } from "@clerk/nextjs";


export default function Page(){
    return (
       <SignUp
       routing="hash"
    forceRedirectUrl="http://localhost:3000/" 
 fallbackRedirectUrl="http://localhost:3000/sign-up"
       />
      )
}