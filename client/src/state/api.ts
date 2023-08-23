import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKPIsResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["KPIs", "Products", "Transactions"],
  endpoints: (build) => ({
    getKPIs: build.query<Array<GetKPIsResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["KPIs"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKPIsQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
