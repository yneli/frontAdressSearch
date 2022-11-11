import style from "./MapsLayout.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useParams } from "react-router-dom";

export const MapsLayout = () => {
    const id: any = useParams<string>();
    let latitude: string = id.id?.split("+")[0].split(":")[1]; 
    let longitude = id.id?.split("+")[1];
    const defaultState = {
        center: [Number(latitude), Number(longitude)],
        zoom: 9,
    };    
    return <>
        <div className={style.mapsLayout}>
            {Object.keys(id).length === 0 ? <YMaps >
                <Map className={style.map} defaultState={{
                    center: [54.984912, 73.367525],
                    zoom: 9}}>
                    <Placemark geometry={[54.984912, 73.367525]} />
                </Map>
            </YMaps>: 
                <YMaps >
                    <Map className={style.map} defaultState={defaultState}>
                        <Placemark geometry={[Number(latitude), Number(longitude)]}/>
                    </Map>
                </YMaps>}
        </div>
    </>
};



