import { SidebarItemProps } from "../../types/sidebar";

export const SIDEBAR_ITEMS: SidebarItemProps[] = [
    {
        title: "Главная",
        icon: "./assets/Home.svg",
        path: ".",
    },
    {
        title: "Поиск адресов",
        icon: "./assets/Search.svg",
        path: "./search",
    },
    {
        title: "Таблицы",
        icon: "./assets/Table.svg",
        path: "./table",
    },
    {
        title: "Календарь",
        icon: "./assets/Celendar.svg",
        path: "./celendar",
    },
    {
        title: "Карты",
        icon: "./assets/Location.svg",
        path: "./map",
    },
    {
        title: "Виджеты",
        icon: "./assets/Widget.svg",
        path: "./widget",
    },
    {
        title: "Настройки",
        icon: "./assets/Gear.svg",
        path: "./settings",
        nested: [
            {
                title: "Настройки профиля",
                icon: "./assets/Person.svg",
                path: "./settings/person",
            },
            {
                title: "Управление финансами",
                icon: "./assets/Finance.svg",
                path: "./settings/finance",
            },
        ],
    },
    {
        title: "Выход",
        icon: "./assets/Exit.svg",
        path: "./exit",
    },
];