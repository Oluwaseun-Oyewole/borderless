/* eslint-disable valid-jsdoc */
import Axios, { AxiosRequestConfig } from "axios";

const Request = {
  /**
   * Prepares request options
   *
   * @param {AxiosRequestConfig} axiosOpts
   * @param {string} authToken
   * @return {Object}
   */
  prepareOptions(axiosOpts?: AxiosRequestConfig | null, authToken?: string) {
    /* eslint-disable-next-line */
    const { url, method, headers, data, ...requestOptions } = axiosOpts || {};

    const options = {
      ...requestOptions,
      headers: {
        ...(headers || {}),
        authorization: "Bearer " + authToken,
      },
    };
    return { data, ...options };
  },
  /**
   * Makes a GET request
   *
   * @param {string} endpoint
   * @param {AxiosRequestConfig | null} options
   */

  async get(endpoint: string, options?: AxiosRequestConfig | null) {
    return (await Axios.get(endpoint, options || {})).data;
  },

  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */
};

export default Request;
