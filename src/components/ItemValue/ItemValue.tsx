import { SearchItemProps } from "../../types/search";
import style from "./ItemValue.module.scss";
import { Link } from "react-router-dom";

export const ItemValue = ({ title, data }: SearchItemProps) => {

    return <>
        <Link to={`/map/:${data.geo_lat + "+" + data.geo_lon}`}>
            <hr  color="D7D7D7"/>
            <div className={style.itemValue}>{title}</div>
        </Link>
    </>;
};
