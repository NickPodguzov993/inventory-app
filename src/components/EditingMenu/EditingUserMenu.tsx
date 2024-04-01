import {EquipmentType, UsersType} from "../../App.tsx";
import Close from "../SVG/Close.tsx";
import Profile from "../SVG/Profile.tsx";
import Edit from "../SVG/Edit.tsx";
import AddEquipment from "../SVG/AddEquipment.tsx";
import DeleteEquipment from "../SVG/DeleteEquipment.tsx";
import EditButton from "../Buttons/EditButton.tsx";
import CancelButton from "../Buttons/CancelButton.tsx";
import SelectionOfEquipment from "../Cards/SelectionOfEquipment.tsx";
import {useState, useContext} from "react";
import SelectionDepartmentCard from "../Cards/SelectionDepartmentCard.tsx";
import UserStatusSelectionCard from "../Cards/UserStatusSelectionCard.tsx";
import {EquipmentsContext} from "../../Context/EquipmentsContext";

type PropsType = {
    close: () => void,
    user: UsersType,
    ownership: EquipmentType[]

}
const EditingUserMenu = ({user, close, ownership}: PropsType) => {
    const {handleAddEquip} = useContext(EquipmentsContext)
    const [openSelectionOfEquipment, setOpenSelectionOfEquipment] = useState<boolean>(false)
    const [openSelectionOfDepartment, setOpenSelectionOfDepartment] = useState<boolean>(false)
    const [openSelectionOfUserStatus, setOpenSelectionOfUserStatus] = useState<boolean>(false)
    const handleOpen = () => {
        setOpenSelectionOfEquipment(true)
    }
    const handleClose = () => {
        setOpenSelectionOfEquipment(false)
    }
    const handleOpenUserStatus = () => {
        setOpenSelectionOfUserStatus(true)
    }
    const handleCloseUserStatus = () => {
        setOpenSelectionOfUserStatus(false)
    }
    const handleOpenDepartment = () => {
        setOpenSelectionOfDepartment(true)
    }
    const handleCloseDepartment = () => {
        setOpenSelectionOfDepartment(false)
    }
    return (
        <div className="h-full flex flex-row gap-[1px] relative">
            <div
                className="w-[640px] h-full p-8 bg-white rounded-r-[40px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="flex flex-row gap-8">
                    <div className="w-40">
                        <Profile/>
                    </div>
                    <div className="justify-between  flex flex-col gap-4">
                        <div>
                            <div className="edit_input_label">ФИО</div>
                            <input type="text" className="edit_input" value={user.name}/>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div>
                                <div className="edit_input_label">id</div>
                                <input type="text" className="edit_input" value={user.id}/>
                            </div>
                            <div>
                                <div className="edit_input_label">E-mail</div>
                                <input type="text" className="edit_input" value={user.email}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="edit_input_label">Отдел</div>
                        <div onClick={handleOpenDepartment}
                             className="flex-row h-10 pl-2 pr-1 py-1 bg-white rounded-[10px] border border-gray-100 justify-start items-center gap-1 inline-flex">
                            <div
                                className="text-white text-xs font-bold font-['Roboto Condensed'] h-[22px] px-2 py-1 bg-indigo-500 rounded justify-center items-center gap-2.5 inline-flex">{user.department}</div>
                            <Edit/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="edit_input_label">Статус сотрудника</div>
                        <div onClick={handleOpenUserStatus}
                            className="flex-row cursor-pointer h-10 pl-2 pr-1 py-1 bg-white rounded-[10px] border border-gray-100 justify-start items-center gap-1 inline-flex">
                            <div
                                className="text-zinc-700 text-xs font-bold font-['Roboto Condensed'] h-[22px] px-2 py-1 rounded justify-center items-center gap-1 inline-flex">
                                {user.isWorking ?
                                    <div className="w-2 h-2 relative bg-lime-500 rounded-[100px]"/> : <div
                                        className="w-2 h-2 relative bg-rose-600 rounded-[100px]"/>} {user.isWorking ? "Работает" : "Не работает"}
                            </div>
                            <Edit/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-zinc-700 text-xl font-bold font-['Roboto']">Техника</div>
                    <div className="flex flex-row gap-4 flex-wrap">
                        <div
                            onClick={handleOpen}
                            className="w-[181.33px] cursor-pointer h-[99px] p-5 rounded-[20px] border border-zinc-300 flex-col justify-center items-center gap-1.5 inline-flex">
                            <div
                                className="self-stretch text-center text-zinc-600 text-xs font-medium font-['Roboto']">Добавить
                                оборудование
                            </div>
                            <div
                                className="w-9 h-9 bg-sky-100 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <AddEquipment/>
                            </div>

                        </div>
                        {ownership.map(e => (
                            <div
                                className="user_equipments"
                                key={e.id}>
                                <span className="text-neutral-800 text-xs font-medium font-['Roboto']">{e.title}</span>
                                <span
                                    className="text-blue-600 text-xs font-medium font-['Roboto Condensed']">{e.id}</span>
                                <div><DeleteEquipment/></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row w-full gap-2"><EditButton title={"Сохранить"}/><CancelButton
                    title={"Сбросить изменения"}/></div>
            </div>
            {openSelectionOfEquipment ? <SelectionOfEquipment close={handleClose}/> : null}
            {openSelectionOfDepartment ? <SelectionDepartmentCard close={handleCloseDepartment}/> : null}
            {openSelectionOfUserStatus ?<UserStatusSelectionCard close={handleCloseUserStatus}/> : null}
            <Close close={close}/>
        </div>
    );
};

export default EditingUserMenu;
