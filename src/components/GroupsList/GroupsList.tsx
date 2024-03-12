import cls from './GroupsList.module.scss'
import GroupCard from "../GroupCard/GroupCard.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {getGroups} from "../../store/selectors/group.selector.ts";

const GroupsList = () => {
    const data = useTypedSelector(getGroups);

    return (
        <div className={cls.list}>
            {data?.length === 0 && <div>Список пуст</div>}
            {data && data.map(group => <GroupCard id={group.id}/>)}
        </div>
    )
}

export default GroupsList;