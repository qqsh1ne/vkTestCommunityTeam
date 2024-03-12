import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {actions} from "../store/groups/groups.slice.ts";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
    ...actions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}