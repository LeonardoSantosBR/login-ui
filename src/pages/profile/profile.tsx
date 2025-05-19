import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import InputForm from "../../components/inputs/input-form";
import PatchClientButton from "../../components/buttons/patch-client-button";
import { ISPatchClientRequest } from "../../interfaces";
import { LogOut } from 'lucide-react';

function Profile() {
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = (data: ISPatchClientRequest) => {}

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-h-[50%] rounded-md bg-login_background_5 shadow-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              render={({ field }) => (
                <InputForm
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
              {...register("email")}
            />
          </div>
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
              {...register("name")}
            />
          </div>
          <div className="w-full flex justify-around items-center gap-3 mt-5">
            <PatchClientButton />
            <LogOut color="white"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
