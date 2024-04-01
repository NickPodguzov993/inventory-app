import {EquipmentType} from "../../App.tsx";


const EquipmentCard = ({id, title} : EquipmentType) => {
    return (
        <div
            className="bg-white p-8 rounded-[20px] border border-zinc-300 justify-between items-end gap-[78px] inline-flex">
            <div>QR-Code</div>
            <div className="text-neutral-800 text-sm font-bold font-['Roboto']">{title}</div>
            <div className="text-blue-600 text-base font-medium font-['Roboto Condensed']">{id}</div>
        </div>
    );
};

export default EquipmentCard;
