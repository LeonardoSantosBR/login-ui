import { ScanFace } from "lucide-react";

function SignIn() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center md:w-290">

      <div className="flex w-[60%] h-[60%] break1:w-[40%] break2:w-[30%] break3:w-[34%] break4:w-[40%] break5:w-50%] rounded-md bg-login_background_5">
        <div className="w-[100%] h-[30%] flex justify-center items-center"> 
          <ScanFace size={60} color="white" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
