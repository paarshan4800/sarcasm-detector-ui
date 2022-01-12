import { toast } from "react-toastify";

export const showErrorToastNotification = (message) => {
  toast.error(message || "Server Error", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    theme: "colored",
  });
};

export const showSuccessToastNotification = (message) => {
  toast.success(message || "Success", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    theme: "colored",
  });
};
