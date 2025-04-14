import { TailSpin } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="w-full h-full fixed bg-slate-400 bg-opacity-55 flex justify-center items-center">
      <TailSpin height="80" width="80" color="blue" ariaLabel="loading" />
    </div>
  );
}

export default Spinner;
