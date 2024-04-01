// Контекст с массивом оборудования

import React, {createContext, useState} from "react";
import {v1} from "uuid";
import {EquipmentType, UsersType} from "../App.tsx";

interface childrenProps {
    children: React.ReactNode
}

interface IContext {
    initialValue: EquipmentType[];
    currentUser: UsersType | null;
    handleAddEquip?: (unknown) => void;
    setCurrentUser?: (unknown) => void;
}
// Создаем объект контекста
const EquipmentsContext = createContext<IContext>({
    initialValue: [],
    currentUser: null,
});

// Используем провайдер для передачи значения контекста дочерним компонентам
const EquipmentsContextProvider = ({children}: childrenProps) => {
    // Ваш код для определения массива, который будет передан через контекст
    const mockEquipments: EquipmentType[] = [
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки", ownerId: '',
            history: [{date: "11.11.2023", status: "Закреплeно", owner: "Станислав"},
                {date: "19.02.2024", status: "Требует ремонта", owner: null},
                {date: "27.03.2024", status: "Резерв", owner: null},
                {date: "01.14.2024", status: "Закреплeно", owner: "Пал Саныч"},]},
        {id: v1(), title: "Ноутбук F+", status: "Закреплeно", type: "Аксессуары", ownerId: ''},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы", ownerId: ''},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: ''},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары", ownerId: ''},
        {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы", ownerId: ''},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: ''},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары", ownerId: ''},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы", ownerId: ''},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: ''},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары", ownerId: ''},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы", ownerId: ''},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: ''},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары", ownerId: ''},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы", ownerId: ''},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: ''},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки", ownerId: ''},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары", ownerId: ''},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы", ownerId: ''},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: ''},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: ''},
    ]

    // const equips = mockEquipments

    const [initialValue, setInitialValue] = useState<EquipmentType[]>(mockEquipments)
    const [currentUser, setCurrentUser] = useState(null)

    const handleAddEquip = (cards) => {
        setInitialValue(initialValue.map(item => {
            const card = cards.find(elem => elem.id === item.id)
            if(card){
                return {...item, ownerId: currentUser.id}
            }
            return item
        }))
    }

    return <EquipmentsContext.Provider value={{
        initialValue: initialValue,
        currentUser: currentUser,
        handleAddEquip: handleAddEquip,
        setCurrentUser: setCurrentUser,
    }}

    >{children}</EquipmentsContext.Provider>;
};

export {EquipmentsContext, EquipmentsContextProvider};
