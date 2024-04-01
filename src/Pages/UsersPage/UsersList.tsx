import {EquipmentType, UsersType} from "../../App.tsx";
import UserCard from "../../components/Cards/UserCard.tsx";
import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext";

type Props = {
    filteredUsers: UsersType[]; mockEquipments: EquipmentType[];
}
const UsersList = ({filteredUsers, mockEquipments}: Props) => {
    const {currentUser, setCurrentUser} = useContext(EquipmentsContext)
    return (
        <>
            <div className="fr flex-wrap gap-8">{filteredUsers.map(item => (
                // тут должны принимать массив уже отфильтрованных юзеров
                <div onClick={() => setCurrentUser && setCurrentUser(item)} key={item.id}
                     className="cursor-pointer w-[296px] bg-white rounded-[40px] p-8 fc justify-between h-[200px]">
                    <div>{item.name}</div>
                    <div className="fr justify-between">
                        <div className="is_working">{item.isWorking ?
                            <div className="w-2 h-2 relative bg-lime-500 rounded-[100px]"/> : <div
                                className="w-2 h-2 relative bg-rose-600 rounded-[100px]"/>} {item.isWorking ? "Работает" : "Не работает"}</div>
                        <div className="department">{item.department}</div>
                    </div>
                </div>
            ))}  </div>
            {currentUser ? <UserCard user={currentUser} mockEquipments={mockEquipments}
                                      closeCard={() => setCurrentUser && setCurrentUser(null)}/> : null}
        </>
    );
};

export default UsersList;
