import { BadgePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CreateClientButton from "../../components/buttons/create-client-button";
import ErrorMessage from "../../components/error/error-message";
import InputForm from "../../components/inputs/input-form";
import { ISignupRequest } from "../../interfaces";
import { emailPattern } from "../../patterns";

function SignUp() {
  const { control, handleSubmit, formState, register } =
    useForm<ISignupRequest>({
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });

  async function handleSignup(data: ISignupRequest) {
    console.log(data);
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-h-[50%] rounded-md bg-login_background_5 shadow-lg p-6">
        <div className="w-full flex justify-center items-center py-4">
          <BadgePlus size={60} color="white" />
        </div>

        <form
          onSubmit={handleSubmit(handleSignup)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              render={({ field }) => (
                <InputForm
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nome"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
              {...register("name", {
                required: "Nome precisa ser preenchido.",
              })}
            />
            <ErrorMessage message={formState.errors.name?.message} />
          </div>

          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              render={({ field }) => (
                <InputForm
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
              {...register("email", {
                required: "Email é obrigatório.",
                pattern: emailPattern,
              })}
            />
            <ErrorMessage message={formState.errors.email?.message} />
          </div>

          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              render={({ field }) => (
                <InputForm
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Senha"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
              {...register("password", {
                required: "Senha precisa ser preenchida.",
              })}
            />
            <ErrorMessage message={formState.errors.password?.message} />
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <CreateClientButton />
            <p className="text-zinc-50 underline hover:text-gray-300 cursor-pointer text-sm">
              <Link to="/signin">Já tem conta?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
