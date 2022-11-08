import style from "./SearchInput.module.scss";
export const SeatchInput = ({ onChange, value }: { onChange:any, value:any}) => {
    return<>
        <input value={value} onChange={onChange} className={style.input} type="text" placeholder="Введите интересующий вас адрес"/>
    </>;
};