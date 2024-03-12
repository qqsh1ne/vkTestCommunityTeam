import './App.css';
import GroupsList from "./components/GroupsList/GroupsList.tsx";
import {ConfigProvider} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import GroupFilters from "./components/GroupFilters/GroupFilters.tsx";
import {useGetGroupsQuery} from "./store/api/api.ts";

function App() {
    const {isLoading, isError, data} = useGetGroupsQuery(null);
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Ошибка получения данных с сервера, мы уже чиним :(</div>}
            {!data && !isLoading && !isError && <div>Что-то пошло не так</div>}
            {data &&
                <ConfigProvider appearance="dark" transitionMotionEnabled={false}>
                    <GroupFilters/>
                    <GroupsList/>
                </ConfigProvider>
            }
        </>
    )
}

export default App
