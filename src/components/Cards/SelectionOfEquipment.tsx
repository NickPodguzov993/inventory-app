import EquipmentSearch from "../Search/EquipmentSearch.tsx";
import {useContext, useState} from "react";
import {EquipmentType} from "../../App.tsx";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentFilterType from "../Filters/EquipmentFilterType.tsx";
import SelectEquipmentCard from "./SelectEquipmentCard.tsx";
import EditButton from "../Buttons/EditButton.tsx";

type PropsType = {
    close: () => void
}
const SelectionOfEquipment = ({close}: PropsType) => {
    const {initialValue, handleAddEquip} = useContext(EquipmentsContext)
    const [checkedItems, setCheckedItems] = useState([])

    const handleCheckItem = (id) => {
        const item = initialValue.find(item => item.id === id)
        const index: number = checkedItems.findIndex(item => item.id === id)
        console.log('index', index)
        setCheckedItems(item && index >= 0 ? checkedItems.filter(item => item.id !== id) : [...checkedItems, item])
    }
    console.log('check',checkedItems)

    const handleConfirm = () => {
        console.log('asdasdadh', handleAddEquip)
        if(handleAddEquip) {
            handleAddEquip(checkedItems)
            setCheckedItems([])
            close()
        }
    }
    return (
        <div className="flex flex-col">
            <div
                className="w-[360px] h-auto rounded-t-[40px] p-8 bg-white shadow flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-gray-800 text-2xl font-bold font-['Roboto']">Выберите технику</div>
                <EquipmentSearch/>
                <EquipmentFilterType equipment={initialValue}></EquipmentFilterType>
            </div>
            <div
                className="w-[360px] overflow-y-scroll bg-[#ECEFF1] rounded-b-[40px] p-8 flex-col justify-between items-start gfap-4 inline-flex">
                <div className="overflow-y-scroll flex flex-col w-full gap-2">
                    {initialValue?.filter(item => item.ownerId === '').map(item =>
                        <SelectEquipmentCard item={item} checkedItems={checkedItems} handleCheckItem={handleCheckItem} />)}
                </div>
                <div className="w-full">
                <EditButton title={"Добавитьjjj"} open={handleConfirm}/>
                </div>
            </div>
        </div>
    );
};

export default SelectionOfEquipment;
