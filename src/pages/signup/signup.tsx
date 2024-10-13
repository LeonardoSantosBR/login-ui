import { BadgePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

interface ICreateAccountRequest {
  name: string;
  email: string;
  password: string;
}

function SignUp() {
  const { control, handleSubmit, formState, register } =
    useForm<ICreateAccountRequest>({
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });

    async function handleSignup(data: any) {
      console.log(data);
    }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center md:w-290">
      <div className="w-[70%] h-[60%] break1:w-[54%] break2:w-[47%] break3:w-[39%] break4:w-[30%] rounded-md bg-login_background_5">
        <div className="w-[100%] h-[30%] flex justify-center items-center">
          <BadgePlus size={60} color="white" />
        </div>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="p-7">
            <div className="mb-4">
              <Controller
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                      id="name"
                      type="text"
                      placeholder="Nome"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
                {...register("name", {
                  required: "Nome precisa ser preenchido.",
                })}
              />
              {formState.errors.name && (
                <p className="text-red-500 text-xs italic">
                  {formState.errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <Controller
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      defaultValue={""}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                      id="email"
                      type="email"
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
                  {formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4 ">
              <Controller
                control={control}
                render={({ field }) => {
                  return (
                    <input
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
                  {formState.errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full h-10 flex flex-col items-center justify-center ">
            <button
              className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
              type="submit"
            >
              Criar conta
            </button>
            <p className="text-zinc-50 underline hover:text-gray-300 cursor-pointer">
              Já tem conta?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
