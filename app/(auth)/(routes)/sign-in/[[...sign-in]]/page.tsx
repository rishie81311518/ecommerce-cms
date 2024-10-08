import { SignIn } from "@clerk/nextjs";



export default function Page() {
    return <SignIn
    routing="hash"
    forceRedirectUrl="http://localhost:3000/"
    fallbackRedirectUrl="http://localhost:3000/sign-in"
    />
    
  }