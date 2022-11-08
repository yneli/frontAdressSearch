import { SearchItemProps } from "../../types/search";
import style from "./ItemValue.module.scss";

export const ItemValue = ({ title }: SearchItemProps) => {
    return <>
        <hr  color="D7D7D7"/>
        <div className={style.itemValue}>{title}</div>
        
    </>;
};