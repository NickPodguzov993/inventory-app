import {EquipmentType} from "../../App";

type PropsType = {
    item:  EquipmentType
    handleCheckItem: unknown
    checkedItems: []
}
const SelectEquipmentCard = ({item, checkedItems, handleCheckItem} : PropsType) => {

    return (
       <div className="w-full h-[60px] bg-white rounded-[20px] p-2.5 gap-4 items-center inline-flex">
           <input type="checkbox" checked={!!checkedItems.find(elem => item.id === elem.id) > 0} onChange={() => handleCheckItem(item.id)}/>
            <div className="text-neutral-800 text-xs font-normal font-['Roboto']">{item.title}</div>
       </div>
    );
};

export default SelectEquipmentCard;
