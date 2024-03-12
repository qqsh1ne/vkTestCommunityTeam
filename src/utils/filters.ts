import {IGroup} from "../types/GroupsTypes.ts";

export const privacyFilter = (list: IGroup[], predicate: string) => {
    switch (predicate) {
        case 'all':
            return [...list];
        case 'close':
            return [...list.filter((group) => group.closed)];
        case 'open':
            return [...list.filter((group) => !group.closed)];
        default:
            return;
    }
};

export const colorFilter = (list: IGroup[], predicate: string) =>
    predicate === 'all'
        ? [...list]
        : [...list.filter((group) => group.avatar_color === predicate)];

export const friendsFilter = (list: IGroup[], predicate: string) => {
    switch (predicate) {
        case 'all':
            return [...list];
        case 'contains':
            return [...list.filter((group) => group.friends)];
        case 'not':
            return[...list.filter((group) => !group.friends)];
        default:
            return;
    }
};