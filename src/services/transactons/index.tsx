import Request from "..";
import { handleRequestError } from "../../utils/axios.error";
import { Endpoints } from "../endpoints";

export const getTransactions = async () => {
  try {
    const response = await Request.get(Endpoints.transactions);
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
