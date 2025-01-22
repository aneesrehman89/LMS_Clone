import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from '../../features/authSlice';

const User_URL = 'http://localhost:8000/api/v1/user/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: User_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (inputForm) => ({
        url: 'registerr',
        method: 'POST',
        body: inputForm,
      }),
    }),
    userLogIn: builder.mutation({
      query: (inputForm) => ({
        url: 'loginn',
        method: 'POST',
        body: inputForm,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {useUserRegisterMutation, useUserLogInMutation} = authApi