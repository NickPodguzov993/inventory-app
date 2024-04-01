import {Route, Routes} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./Layout/Header/Header.tsx";
import NavBar from "./Layout/NavBar/NavBar.tsx";
import UsersPage from "./Pages/UsersPage/UsersPage.tsx";
import {v1} from 'uuid';
import {UserContextProvider} from "./Context/UsersContext.tsx";
import {EquipmentsContextProvider} from "./Context/EquipmentsContext.tsx";
import EquipmentsPage from "./Pages/EquipmentsPage/EquipmentsPage.tsx";


export type EquipmentType = {
    id: string,
    title: string,
    status: "Закреплeно" | "Резерв" | "Требует ремонта" | "Списано" | "В другом офисе",
    type: "Ноутбуки" | "Аксессуары" | "Мониторы" | "Принтеры" | "Системный блок",
    ownerId: string;
    history?: {date: string, status: string, owner: string | null}[]
}

export type UsersType = {
    id: string, email: string, name: string, isWorking: boolean, department: string, equipment?: EquipmentType[]
    // допилить возможность отсутсвия техники у юзера
}

function App() {


    return (
        <EquipmentsContextProvider>
            <UserContextProvider>
                <Wrapper>
                    <Header/>
                    <div className="fr w-full">
                        <NavBar/>
                        <Routes>
                            <Route path={'/equipment'} element={<EquipmentsPage/>}/>
                            <Route path={'/'}
                                   element={<UsersPage/>}/>
                        </Routes>
                    </div>
                </Wrapper>
            </UserContextProvider>
        </EquipmentsContextProvider>
    )
}

export default App

