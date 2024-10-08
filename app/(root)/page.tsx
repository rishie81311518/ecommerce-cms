import { UserButton } from "@clerk/nextjs";


const SetupPage = () => {
    return (
        <div className="p-4">
          <UserButton afterSwitchSessionUrl="/" />
        </div>
    );
}


export default SetupPage;