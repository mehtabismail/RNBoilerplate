import { API_URL } from "@/Config";
import { logout } from "@/store/auth/AuthSlice";
import { persistor } from "@/store/store";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }: any) => {
    const token: string = getState().auth.token as any;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const { dispatch, endpoint, getState }: any = api;

  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    dispatch({ type: "logout" });
    setTimeout(async () => {
      dispatch(logout()), await persistor.purge();
      await persistor.flush();
    }, 500);
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
