export interface IGroup {
    "id": number,
    "name": string,
    "closed": boolean,
    "avatar_color"?: string,
    "members_count": number,
    "friends"?: User[]
}
interface User {
    "first_name": string,
    "last_name": string
}

export interface IGetGroupsResponse {
    result: 1 | 0,
    data?: IGroup[]
}

export interface IGroupsState {
    groups: IGroup[],
    filteredGroups: IGroup[],
    color: string,
    privacy: string,
    containsFriends: string,
    isError: boolean,
}