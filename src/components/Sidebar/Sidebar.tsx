import style from "./Sidebar.module.scss";
import { SIDEBAR_ITEMS } from "./constants";
import  { SidebarItem }  from "../Sidebaritem/SidebarItem";
import React from "react";

export const Sidebar = () => {
    const [ target, setTarget ] = React.useState(".");
    return <div className={style.sidebar}>
        <h2>Меню</h2>
        {SIDEBAR_ITEMS?.map(item => <SidebarItem  target={() => setTarget(item.path)} {...item} active={item.path === target} />)}
    </div>;
};


