import {EquipmentType, UsersType} from "../../App.tsx";
import Copy from "../SVG/Copy.tsx";
import EquipmentCard from "./EquipmentCard.tsx";
import EquipmentFilterType from "../Filters/EquipmentFilterType.tsx";
import EditButton from "../Buttons/EditButton.tsx";
import {useContext, useEffect, useState} from "react";
import EditingUserMenu from "../EditingMenu/EditingUserMenu.tsx";
import Profile from "../SVG/Profile.tsx";
import Close from "../SVG/Close.tsx";
import {EquipmentsContext} from "../../Context/EquipmentsContext";

type Props = {
    closeCard: () => void,
    user: UsersType,
    mockEquipments: EquipmentType[];
}
const UserCard = ({closeCard, user, mockEquipments}: Props) => {
    const [openEditMenu, setOpenEditMenu] = useState<boolean>(false)
    const {initialValue} = useContext(EquipmentsContext)
    const [ownership, setOwnership] = useState([])

    useEffect(()=> {
        setOwnership(initialValue?.filter((item) => item.ownerId === user.id))
    }, [initialValue])

    const handleOpenEditMenu = () => {
        setOpenEditMenu(true)
    }
    const handleCloseMenu = () => {
        setOpenEditMenu(false)
    }


    return (
        <div
            className="fixed  w-full inset-0 flex flex-row items-start justify-start z-30 bg-black bg-opacity-40">

            {openEditMenu ? <EditingUserMenu mockEquipments={mockEquipments} user={user} ownership={ownership} close={handleCloseMenu}/>
                : <div
                    className="flex flex-col relative sm:w-[640px] h-[900px] sm:h-full w-full left-0 py-8 px-4 sm:p-8 fc gap-8 bg-white sm:rounded-r-[40px]">
                    <Close close={closeCard}/>
                    <div className="flex flex-row gap-8 w-[576px] h-40">
                        <Profile/>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row justify-between w-96">
                                <div
                                    className="text-[#263238] text-base font-medium font-['Roboto Condensed'] flex flex-row gap-[2px] items-center">
                                    <div className="w-[160px]">{user.id}</div>
                                    <Copy/>
                                </div>
                                <div
                                    className="text-[#263238] text-base font-medium font-['Roboto Condensed'] flex flex-row gap-[2px] items-center">{user.email}<Copy/>
                                </div>
                            </div>
                            <div className="text-[#212121] text-[32px] font-bold font-['Roboto']">{user.name}</div>
                            <div className="flex-row flex justify-between">
                                <div className="is_working">{user.isWorking ?
                                    <div className="w-2 h-2 relative bg-lime-500 rounded-[100px]"/> : <div
                                        className="w-2 h-2 relative bg-rose-600 rounded-[100px]"/>} {user.isWorking ? "Работает" : "Не работает"}
                                </div>
                                <div
                                    className="text-white text-xs font-bold font-['Roboto Condensed'] px-2 py-1.5 bg-indigo-500 rounded justify-center items-center">{user.department}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="text-gray-800 text-xl font-bold font-['Roboto']">Техника</div>
                            <div>
                                <EquipmentFilterType/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            {ownership.map(e => (
                                <EquipmentCard id={e.id} title={e.title} status={e.status} type={e.type}/>
                            ))}
                        </div>
                        <EditButton title={"Редактировать"} open={handleOpenEditMenu}/>
                    </div>
                </div>}
        </div>
    );
};
export default UserCard;
