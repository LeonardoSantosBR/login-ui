import { toast, Bounce } from "react-toastify";

function ToastErrorMessage({errorMessage}: {errorMessage: string | undefined}) {
    return toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
  }
  
  export default ToastErrorMessage;
  