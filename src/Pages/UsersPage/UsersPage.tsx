// Главная страница пользователей
// нужно добавить фильтрацию юзеров по кнопкам в компон
// День, когда разработка разделилась на до и после

import UserFilter from "../../components/Filters/UserFilter.tsx";
import { UsersType} from "../../App.tsx";
import UserStatusFilter from "../../components/Filters/UserStatusFilter.tsx";
import UsersList from "./UsersList.tsx";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UsersContext.tsx";
import {EquipmentsContext} from "../../Context/EquipmentsContext";




const UsersPage = () => {
    const allUsers = useContext(UserContext) //получили весь массив пользователей
    const allEquip = useContext(EquipmentsContext) //получили весь массив пользователей
    const [users, setUsers] = useState<UsersType[]>(allUsers)


    const handleSetFilterDepartment = (department: string) => {
        if (department === "Все") {
            setUsers(allUsers)
        } else {
            const filteredUsers = allUsers.filter((user) => user.department === department) // записываем в переменную нужный фильтр

            setUsers(filteredUsers)
        }
    }
    const handleSetFilterStatus = (status: string) => {
        if (status === "Все") {
            setUsers(allUsers)
        } else if (status === "Работает"){
            const filteredUsers = allUsers.filter((user) => user.isWorking) // записываем в переменную нужный фильтр
            setUsers(filteredUsers)
        } else if (status === "Не работает") {
            const filteredUsers = allUsers.filter((user) => !user.isWorking) // записываем в переменную нужный фильтр
            setUsers(filteredUsers)
        }
    }


    return (
        <div className="users_page">
            <div className="flex flex-row gap-[10px] items-center">
                <h1>Сотрудники</h1>
                <div
                    className="flex items-center justify-center text-base text-gray font-black w-9 h-7 px-4 bg-stone-300 rounded-[100px]">
                    {allUsers.length}
                </div>
            </div>
            <div className="fr justify-between w-full">
                <UserFilter setFilter={handleSetFilterDepartment}/>
                <UserStatusFilter setFilter={handleSetFilterStatus}/>
            </div>
            <UsersList filteredUsers={users} mockEquipments={allEquip}/>
        </div>
    );
};

export default UsersPage;
