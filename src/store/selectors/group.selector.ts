import {StateSchema} from "../../types/StateSchema.ts";
import {IGroup} from "../../types/GroupsTypes.ts";

export const getGroups: (state: StateSchema) => IGroup[] | undefined = (state) => state.groups.filteredGroups;