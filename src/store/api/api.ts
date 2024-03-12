import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";
import {IGroup, IGetGroupsResponse} from "../../types/GroupsTypes.ts";
import {API_URL} from "../../utils/consts.ts";


const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
});

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1});

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    endpoints: builder => ({
        getGroups: builder.query<IGroup[], string | null>({
            query: () => `groups`,
            transformResponse: (response: IGetGroupsResponse) => {
                if (response.result === 0) {
                    throw new Error('Ошибка получения данных с сервера');
                }
                if (!response.data) {
                    return [];
                }
                return response.data;
            },
            transformErrorResponse: () => {
                throw new Error('Ошибка получения данных с сервера');
            },
        }),
    }),
});

export const {useGetGroupsQuery} = api;