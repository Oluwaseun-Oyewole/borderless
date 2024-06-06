import { AxiosError } from "axios";
import { truncate } from "../helper";

export const handleRequestError = (
  error: AxiosError | any,
  defaultMessage = "An error occurred."
) => {
  let useMessage = null;
  const statusCode = error.response?.status?.toString();
  if (statusCode?.startsWith("4") || statusCode?.startsWith("5")) {
    const data = error?.response?.data;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useMessage =
      truncate(data?.message, 50) ||
      data?.message ||
      (data?.errors && data?.errors[0]?.message) ||
      error?.message ||
      defaultMessage;
  }
  // show toast error  here or an error modal to handle the error
};
