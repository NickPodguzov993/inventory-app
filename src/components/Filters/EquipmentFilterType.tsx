// блок фильтрации оборудования на главной странице оборудования

import {EquipmentType} from "../../App.tsx";
import FilterButton from "../Buttons/FilterButton.tsx";
import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";

type Props = {
    close?: () => void,

}
const EquipmentFilterType = ({close}: Props) => {

    const {initialValue} = useContext(EquipmentsContext)
    function getUniqueEquipments(allEquipments: EquipmentType[]): string[] {
        const uniqueEquipments: string[] = [];
        allEquipments.forEach(d => {
            if (!uniqueEquipments.includes(d.type)) {
                uniqueEquipments.push(d.type);
            }
        });
        return uniqueEquipments;
    }

    const uniqueEquipments = getUniqueEquipments(initialValue);

    return (
        <div className="user_filter_container">
            <FilterButton setFilter={() => alert("1")} close={close} title={"Все"}/>
            {uniqueEquipments.map((u, index) => (
                <FilterButton setFilter={() => alert("1")} close={close} key={index} title={u}/>
                // нужно кей нормальный присобачить.
            ))}
        </div>
    );
};

export default EquipmentFilterType;
