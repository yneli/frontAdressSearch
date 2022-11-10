import { useEffect } from "react";
import OverlayScrollbars from "overlayscrollbars";

const config = {};
export const useScrollbar = (root, hasScroll) => {
    useEffect(() => {
        let scrollbars;

        if (root.current, hasScroll){
            scrollbars = OverlayScrollbars(root.current, config);
        }

        return () => {
            if (scrollbars) {
                scrollbars.destroy();
                scrollbars = null;
            }
        };
    }, [root, hasScroll]);
};