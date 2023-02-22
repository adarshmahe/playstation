import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://raw.githubusercontent.com/adarshmahe/playstation/main/public/game.json" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
