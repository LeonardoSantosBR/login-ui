import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import InputForm from "../../components/inputs/input-form";
import PatchClientButton from "../../components/buttons/patch-client-button";
import { IPatchClientRequest } from "../../interfaces";
import { LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { handleProfile } from "./handle-profile";
import { getUserId, setTokenNull } from "../../utils/localstorage-util";
import { useEffect } from "react";

function Profile() {
  const navigate = useNavigate();
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const { data } = useQuery({
    queryKey: ["profile", getUserId()],
    queryFn: handleProfile,
  });

  useEffect(() => {
    if (data) {
      reset({
        email: data.email,
        name: data.name,
      });
    }
  }, [data, reset]);

  const logout = () => {
    setTokenNull();
    navigate("/signin");
  };

  const onSubmit = (data: IPatchClientRequest) => {};

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
            <LogOut color="white" onClick={() => logout()} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
