import style from "./Home.module.scss";
import { NewsLayout } from "../NewsLayout/NewsLayout";
import { NEWS_ITEMS } from "./constants";
import { useRef } from "react";
import { useScrollbar } from "../../hooks/use-scrollbar";

export const Home = () => {
    const homeWrapper = useRef(null);

    useScrollbar(homeWrapper, true);
    return <>
        <div  className={style.home}>
            <h2>Новости</h2>
            <NewsLayout>
                <h3>Обновлние CRM до 1.2</h3>
                <h3 style={{  height: "600px", minHeight: "300px" }} ref={homeWrapper}>{NEWS_ITEMS[0]}</h3>
            </NewsLayout>
        </div>
    </>;
};