import { ReactNode } from "react";
import style from "./NewsLayout.module.scss";
export const NewsLayout = ({ children }: { children?: ReactNode}) => {
    return <div className={style.newsLayout}>
        {children}
    </div>;
};