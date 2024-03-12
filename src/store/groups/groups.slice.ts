import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../api/api.ts";
import {IGroup, IGroupsState} from "../../types/GroupsTypes.ts";
import {colorFilter, friendsFilter, privacyFilter} from "../../utils/filters.ts";

const initialState: IGroupsState = {
    groups: [],
    filteredGroups: [],
    color: 'all',
    privacy: 'all',
    containsFriends: 'all',
    isError: false,
}

export const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        filterGroups: (state) => {
            let currentList = state.groups;
            currentList = privacyFilter(currentList, state.privacy) as IGroup[];
            currentList = colorFilter(currentList, state.color) as IGroup[];
            currentList = friendsFilter(currentList, state.containsFriends) as IGroup[];
            return {...state, filteredGroups: currentList}
        },
        setPrivacyFilter: (state, {payload}) => {
            state.privacy = payload;
        },
        setColorFilter: (state, {payload}) => {
            state.color = payload;
        },
        setFriendsFilter: (state, {payload}) => {
            state.containsFriends = payload;
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