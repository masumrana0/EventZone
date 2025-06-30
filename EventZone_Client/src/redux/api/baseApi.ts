/**
 * Title: 'Redux RTK query setup by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 *Date: 30-06-2025
 *
 */

import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../helper/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: () => ({}),
  tagTypes: ["user", "event", "auth"],
});
