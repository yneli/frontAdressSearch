import React, { useState } from "react";
import clsx from "clsx";
import { SidebarItemProps } from "../../types/sidebar";
import style from "./Sidebaritem.module.scss";
import { Link } from "react-router-dom";

export const SidebarItem = ({ 
    title, path, icon, nested, active, target }: SidebarItemProps & 
    { active?: boolean, target?: React.MouseEventHandler<HTMLDivElement>; }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return <>
  
        <Link className={style.link} to={path}>
            <div onClick={target} className={clsx(style.sidebarItem, {
                [style.active]: active,
            })}>
                <img src={icon} />
                <h5>{title}</h5>
                {nested && <button onClick={() => setIsCollapsed(prev => !prev)} 
                    className={clsx(style.collapse, { [style.collapsed]: isCollapsed })}>
                    <img src="./assets/Polygon.svg" /></button>}
            </div>
            <div className={style.children}>
                {nested && !isCollapsed && nested.map(item => <SidebarItem {...item} />)}
            </div>
        </Link>

    </>;
};


