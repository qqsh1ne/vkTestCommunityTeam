import cls from './GroupsList.module.scss'
import GroupCard from "../GroupCard/GroupCard.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {getGroups} from "../../store/selectors/group.selector.ts";

const GroupsList = () => {
    // const {isLoading, isError, data} = useGetGroupsQuery(null);
    const data = useTypedSelector(getGroups);

    return (
        <div className={cls.list}>
            {/*{isLoading && <div>Loading...</div>}*/}
            {/*{isError && <div>Ошибка получения данных с сервера, мы уже чиним :(</div>}*/}
            {/*{!data && !isLoading && !isError && <div>Что-то пошло не так</div>}*/}
            {data && data.map(group => <GroupCard id={group.id}/>)}
        </div>
    )
}

export default GroupsList;