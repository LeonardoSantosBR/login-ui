import { ScanFace } from "lucide-react";

function SignIn() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center md:w-290">

      <div className="flex w-[70%] h-[60%] break1:w-[54%] break2:w-[47%] break3:w-[39%] break4:w-[30%] rounded-md bg-login_background_5">
        <div className="w-[100%] h-[30%] flex justify-center items-center"> 
          <ScanFace size={60} color="white" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
