import style from "./Button.module.scss";
import { ReactNode } from "react";

export const Button = ({ children, onClick }: { children?: ReactNode, onClick: React.MouseEventHandler | undefined }) => {
    return (
        <button onClick={onClick}
            className={style.button}>
            {children}
        </button>
    );
};