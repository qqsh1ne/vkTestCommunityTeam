import {FormItem, FormLayoutGroup, Panel, Radio, RadioGroup, View} from "@vkontakte/vkui";
import {ChangeEvent} from "react";
import {useActions} from "../../hooks/useActions.ts";

const GroupFilters = () => {

    const {filterByPrivacy, filterByColor, filterByFriends} = useActions();

    const handlePrivacyChange = (evt: ChangeEvent<HTMLInputElement>) => {
        filterByPrivacy(evt.target.value);
    };

    const handleColorChange = (evt: ChangeEvent<HTMLInputElement>) => {
        filterByColor(evt.target.value);
    };

    const handleFriendsChange = (evt: ChangeEvent<HTMLInputElement>) => {
        filterByFriends(evt.target.value);
    };

    return (
        <>
            <View activePanel='filters'>
                <Panel id="filters">
                    <FormLayoutGroup>
                        <FormItem top={'Приватность группы'}>
                            <RadioGroup onChange={handlePrivacyChange}>
                                <Radio name='privacy' value='all' defaultChecked>
                                    Все
                                </Radio>
                                <Radio name='privacy' value='close'>
                                    Закрытая
                                </Radio>
                                <Radio name='privacy' value='open'>
                                    Открытая
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem top={'Цвет аватарки'}>
                            <RadioGroup onChange={handleColorChange}>
                                <Radio name='color' value='all' defaultChecked>
                                    Любой
                                </Radio>
                                <Radio name='color' value='yellow'>
                                    Желтый
                                </Radio>
                                <Radio name='color' value='green'>
                                    Зеленый
                                </Radio>
                                <Radio name='color' value='red'>
                                    Красный
                                </Radio>
                                <Radio name='color' value='blue'>
                                    Синий
                                </Radio>
                                <Radio name='color' value='purple'>
                                    Фиолетовый
                                </Radio>
                                <Radio name='color' value='orange'>
                                    Оранжевый
                                </Radio>
                                <Radio name='color' value='white'>
                                    Белый
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem top={'Наличие друзей в группе'}>
                            <RadioGroup onChange={handleFriendsChange}>
                                <Radio name='friends' value='all' defaultChecked>
                                    Неважно
                                </Radio>
                                <Radio name='friends' value='contains'>
                                    Есть
                                </Radio>
                                <Radio name='friends' value='not'>
                                    Нет
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                    </FormLayoutGroup>
                </Panel>
            </View>
        </>
    )
};

export default GroupFilters;