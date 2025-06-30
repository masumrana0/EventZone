/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (data: any) => ({
        url: "/auth/register",
        method: "POST",
        data: data, 
      }),
    }),
    signin: build.mutation({
      query: (signinData: any) => ({
        url: "/auth/login",
        method: "POST",
        data: signinData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSigninMutation, useSignupMutation } = authApi;
