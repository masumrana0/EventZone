/**
 * Title: 'Redux RTK query setup by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 *Date: 30-06-2025
 *
 */

import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../helper/axios/axiosBaseQuery";

const url = "https://event-zone-backend.vercel.app/api/v1";
// const dev_url="http://localhost:5000/api/v1"
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: url }),
  endpoints: () => ({}),
  tagTypes: ["user", "event", "auth"],
});
