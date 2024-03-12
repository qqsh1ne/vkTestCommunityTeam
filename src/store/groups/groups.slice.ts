import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../api/api.ts";
import {IGroup, IGroupsState} from "../../types/GroupsTypes.ts";

const initialState: IGroupsState = {
    groups: [],
    filteredGroups: [],
    color: 'any',
    privacy: 'any',
    containsFriends: 'any',
    isError: false,
}

export const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        filterByPrivacy: (state, {payload}) => {
            console.log(payload);
            state.privacy = payload;
            switch (payload) {
                case 'all':
                    state.filteredGroups = [...state.groups];
                    return;
                case 'close':
                    state.filteredGroups = [...state.groups.filter((group) => group.closed)];
                    return;
                case 'open':
                    state.filteredGroups = [...state.groups.filter((group) => !group.closed)];
                    return;
                default:
                    return;
            }
        },
        filterByColor: (state, {payload}) => {
            state.color = payload;
            if (payload === 'all') {
                state.filteredGroups = [...state.groups];
                return;
            }
            state.filteredGroups = [...state.groups.filter((group) => group.avatar_color === payload)];
        },
        filterByFriends: (state, {payload}) => {
            state.containsFriends = payload;
            switch (payload) {
                case 'all':
                    state.filteredGroups = [...state.groups];
                    return;
                case 'contains':
                    state.filteredGroups = [...state.groups.filter((group) => group.friends)];
                    return;
                case 'not':
                    state.filteredGroups = [...state.groups.filter((group) => !group.friends)];
                    return;
                default:
                    return;
            }
        },
    },
    extraReducers: builder => {
        builder
            .addMatcher(
                api.endpoints?.getGroups.matchFulfilled,
                (state, {payload}: PayloadAction<IGroup[]>) => {
                    console.log(payload);
                    state.groups = payload;
                    state.filteredGroups = payload;
                }
            )
            .addMatcher(
                api.endpoints?.getGroups.matchRejected,
                (state) => {
                    state.isError = true;
                }
            )
    },
});

export const {actions, reducer} = groupsSlice;