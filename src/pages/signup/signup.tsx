import { zodResolver } from "@hookform/resolvers/zod";
import { BadgePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { SignupSchema } from "./schemas/signup";

function SignUp() {
  // const { register, control, handleSubmit, formState, reset } = useForm({
  //   resolver: zodResolver(SignupSchema),
  // });
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center md:w-290">
      <div className="w-[70%] h-[60%] break1:w-[54%] break2:w-[47%] break3:w-[39%] break4:w-[30%] rounded-md bg-login_background_5">
        <div className="w-[100%] h-[30%] flex justify-center items-center">
          <BadgePlus size={60} color="white" />
        </div>
        <form>
          <div className="p-5">
            <div className="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="name"
                type="text"
                placeholder="Nome"
              />
              {/* <p className="text-red-500 text-xs italic">
                Erro teste
              </p> */}
            </div>
            <div className="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
              {/* <p className="text-red-500 text-xs italic">Erro teste</p> */}
            </div>
            <div className="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="name"
                type="password"
                placeholder="Senha"
              />
              {/* <p className="text-red-500 text-xs italic">Erro teste</p> */}
            </div>
          </div>
        </form>
        <div className="w-full h-10 flex flex-col items-center justify-center ">
          <button
            className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
            type="button"
          >
            Criar conta
          </button>
          <p className="text-zinc-50 underline hover:text-gray-300 cursor-pointer">
            Já tem conta?
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
