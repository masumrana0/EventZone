import { baseApi } from "../baseApi";

const url = "/events";

const eventApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createEvent: build.mutation({
      query: (data: any) => ({
        url,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["event"],
    }),

    updateEvent: build.mutation({
      query: ({ eventId, data }) => ({
        url: `${url}/${eventId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["event"],
    }),

    updateAttendees: build.mutation({
      query: (eventId) => ({
        url: `${url}/attendees/${eventId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["event"],
    }),
    deleteEvent: build.mutation({
      query: (eventId: string) => ({
        url: `${url}/${eventId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["event"],
    }),

    getAllEvent: build.query({
      query: (qeury: string) => {
        return {
          url: `${url}?${qeury}`,
          method: "GET",
        };
      },
      providesTags: ["event"],
    }),

    getMyEvent: build.query({
      query: () => {
        return {
          url: `${url}/my-events`,
          method: "GET",
        };
      },
      providesTags: ["event"],
    }),
    getOneEvent: build.query({
      query: (eventId: string) => {
        return {
          url: `${url}/one/${eventId}`,
          method: "GET",
        };
      },
      providesTags: ["event"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateEventMutation,
  useUpdateEventMutation,
  useUpdateAttendeesMutation,
  useDeleteEventMutation,
  useGetOneEventQuery,
  useGetMyEventQuery,
  useGetAllEventQuery,
} = eventApi;
