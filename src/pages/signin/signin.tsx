import { ScanFace } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SigninButton from "../../components/buttons/signin-button";
import ErrorMessage from "../../components/error-message";
import InputForm from "../../components/inputs/input-form";
import { ISigninRequest } from "../../interfaces/Isignin";

function SignIn() {
  const { register, control, handleSubmit, formState } =
    useForm<ISigninRequest>({
      defaultValues: {
        email: "",
        password: "",
      },
    });

  async function handleSignin(data: ISigninRequest) {
    console.log(data);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center md:w-290">
      <div className="w-[70%] h-[60%] break1:w-[54%] break2:w-[47%] break3:w-[39%] break4:w-[30%] rounded-md bg-login_background_5">
        <div className="w-[100%] h-[30%] flex justify-center items-center">
          <ScanFace size={60} color="white" />
        </div>
        <form onSubmit={handleSubmit(handleSignin)}>
          <div className="p-7">
            <div className="mb-4">
              <Controller
                control={control}
                render={({ field }) => {
                  return (
                    <InputForm
                      defaultValue={""}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                      id="email"
                      type="text"
                      placeholder="Email"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
                {...register("email", {
                  required: "Email é obrigatório.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Escreva um email válido.",
                  },
                })}
              />
              {formState.errors.email && (
                <p className="text-red-500 text-xs italic">
                  <ErrorMessage message={formState.errors.email.message} />
                </p>
              )}
            </div>
            <div className="mb-4">
              <Controller
                control={control}
                render={({ field }) => {
                  return (
                    <InputForm
                      defaultValue={""}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                      id="password"
                      type="password"
                      placeholder="Senha"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
                {...register("password", {
                  required: "Senha precisa ser preenchida.",
                })}
              />
              {formState.errors.password && (
                <p className="text-red-500 text-xs italic">
                  <ErrorMessage message={formState.errors.password.message} />
                </p>
              )}
            </div>
          </div>
          <div className="w-full h-10 flex flex-col items-center justify-center ">
            <SigninButton />
            <p className="text-zinc-50 underline hover:text-gray-300 cursor-pointer">
              <Link to="/signup">Não tem conta?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
