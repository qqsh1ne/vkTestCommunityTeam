import {FC, useState} from "react";
import {Group, Header, Panel, PanelHeaderClose, SimpleCell, View} from "@vkontakte/vkui";
import cls from './GroupCard.module.scss'
import {getGroupById} from "../../store/selectors/groupById.selector.ts";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

const GroupCard: FC<{id: number}> = ({id}) => {
    const [activePanel, setActivePanel] = useState('info');

    const group = useTypedSelector((state) => getGroupById(state, id));

    if (!group) {
        return <></>
    }

    return (
        <>
            <View activePanel={activePanel} className={cls.card} style={{width: '300px'}}>
                <Panel id="info">
                    <Group
                        header={
                        <div className={cls.header}>
                            <Header>{group.name}</Header>
                            {group.avatar_color && <div className={cls.avatar} style={{backgroundColor: `${group.avatar_color}`}}/>}
                        </div>
                    }>
                        <SimpleCell indicator={group.members_count}>Участников</SimpleCell>
                        <SimpleCell indicator={group.closed ? 'Закрытая' : 'Открытая'}>Приватность</SimpleCell>
                        {group.friends && group.friends.length !== 0 &&
                            <SimpleCell
                                onClick={() => setActivePanel('friendsList')}
                                indicator={group.friends?.length}
                                expandable="always">
                                Друзей подписано
                            </SimpleCell>}
                    </Group>
                </Panel>
                <Panel id='friendsList'>
                    <Group
                        header={
                        <div>
                            <PanelHeaderClose onClick={() => setActivePanel('info')}/>
                            <Header>Друзья, подписанные на {group.name}</Header>
                        </div>
                    }>
                        {group.friends?.map((friend) =>
                            <SimpleCell>
                                {friend.first_name} {friend.last_name}
                            </SimpleCell>
                        )}
                    </Group>
                </Panel>
            </View>
        </>
    );
};

export default GroupCard;