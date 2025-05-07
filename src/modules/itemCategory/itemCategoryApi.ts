import { generateQueryParams } from '@/lib/redux/reduxTools';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const itemCategoryApi = createApi({
  reducerPath: 'itemCategoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['ItemCategory'],
  endpoints: (builder) => ({
    getItemCategories: builder.query<
      AppItemCategories,
      { id?: string; name?: string }
    >({
      query: (params) => {
        let url = '/itemCategories'; // URL de base pour l'API
        if (params) {
          const queryString = generateQueryParams(params);
          if (queryString) url += `?${queryString}`;
        }
        return { url };
      },
      providesTags: ['ItemCategory'],
    }),
    createItemCategory: builder.mutation<void, IAppItemCategory>({
      query: (newCat) => ({
        url: '/itemCategories',
        method: 'POST',
        body: newCat,
      }),
      invalidatesTags: ['ItemCategory'],
    }),
    updateItemCategory: builder.mutation<
      IAppItemCategory,
      { id: string; updates: Partial<IAppItemCategory> }
    >({
      query: ({ id, updates }) => ({
        url: `/itemCategories/${id}`,
        method: 'PUT',
        body: updates,
      }),
      invalidatesTags: ['ItemCategory'],
    }),
    deleteItemCategory: builder.mutation<void, string>({
      query: (id) => ({ url: `/itemCategories/${id}`, method: 'DELETE' }),
      invalidatesTags: ['ItemCategory'],
    }),
  }),
});

export default itemCategoryApi;
export const {
  useGetItemCategoriesQuery,
  useCreateItemCategoryMutation,
  useUpdateItemCategoryMutation,
  useDeleteItemCategoryMutation,
} = itemCategoryApi;
