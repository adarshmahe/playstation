import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "game.json" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
