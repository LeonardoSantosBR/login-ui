import { toast, Bounce } from "react-toastify";

function ToastSuccessMessage({successMessage}: {successMessage: string | undefined}) {
    return toast.success(successMessage, {
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
  
  export default ToastSuccessMessage;
  