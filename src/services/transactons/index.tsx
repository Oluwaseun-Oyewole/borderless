import Request from "..";
import { Endpoints } from "../endpoints";

export const getTransactions = async () => {
  try {
    const response = await Request.get(Endpoints.transactions);
    return response;
  } catch (error) {
    console.log(error);
    // handle request error here
  }
};
