import {StateSchema} from "../../types/StateSchema.ts";
import {IGroup} from "../../types/GroupsTypes.ts";

export const getGroupById: (state: StateSchema, id: number) => IGroup | undefined = (state, id) => state.groups.filteredGroups.find(group => group.id === id);