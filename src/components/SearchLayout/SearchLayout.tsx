import style from "./SearchLayout.module.scss";
import { Button } from "../Button/Button";
import { SeatchInput } from "../SearchInput/SearchInput";
import { SearchInputValue } from "../SearchInputValue/SearchInputValue";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { fetchAdress } from "../../redux/slices/addresses/addressesSlice";

export const SearchLayout = () => {
    const [input, setInput] = useState("");
    const [btnValue, setBtnValue] = useState(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(input.length > 0){
        }else(setBtnValue(false));
    },[input]);
    const btnSearch = () => {
        dispatch(fetchAdress(input));
        setBtnValue(true);
    };
    return <>
        <div className={style.searchLayout}>
            <h5>Поиск адресов</h5>
            <p>Введите интересующий вас адрес</p>
            <div className={style.seatch}>
                <SeatchInput value={input} onChange={(e:any) => setInput(e.target.value)}></SeatchInput>
                <Button onClick={btnSearch}>
                    <img src="./assets/searchlogo.svg"/>
                    <div>Поиск</div></Button>
            </div>
            {btnValue? <SearchInputValue/>: ""}
        </div>
    </>;
};




