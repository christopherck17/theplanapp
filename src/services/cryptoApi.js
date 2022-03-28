import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '04f7b6c1f4msh41b0dd0390fcda6p14abdbjsnbcede9d7e3c3'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBitcoinPrice: builder.query({
        query: () => createRequest('/coin/Qwsogvtv82FCd/price'),
    }),
  }),
});

export const {
  useGetBitcoinPriceQuery,
} = cryptoApi;