import style from "./Header.module.scss";
export const Header = () => {

    return <>
        <div className={style.header}>
            <div className={style.logo}>
                <img src="./assets/ic_logo.svg" />
                <h3>Wrench CRM</h3>
            </div>
            <div className={style.logo}>
                <img src="./assets/ic_person.svg" />
                <h3>Имя Фамилия</h3>
            </div>
        </div>
    </>;
};
