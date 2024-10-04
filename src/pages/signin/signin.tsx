import { ScanFace } from "lucide-react";

function SignIn() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center md:w-290">
      <div className="flex w-29 h-60 bg-login_background_5 rounded-md">
        <div>
          <ScanFace size={40} color="white" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
