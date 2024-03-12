import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as groupsReducer} from "./groups/groups.slice.ts";
import {api} from "./api/api.ts";

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    groups: groupsReducer,
});

export const store= configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>