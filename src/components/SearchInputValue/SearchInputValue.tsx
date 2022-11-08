import { useAppSelector } from "../../redux/hook";
import { ItemValue } from "../ItemValue/ItemValue";
import style from "./SearchInputValue.module.scss";

export const SearchInputValue = () => {
    let data = useAppSelector((state) => state.addres.items);
    return <>
        <div className={style.searchLayoutvalue}>
            <div className={style.content}>
                <h5>Адреса</h5>
                {data?.map(item => <ItemValue title={item.value}/>)}
            </div>
        </div>
    </>;

};