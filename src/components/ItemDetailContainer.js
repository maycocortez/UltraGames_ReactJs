import ItemDetail from "./ItemDetail";
import React, {useState, useEffect} from "react";
import juego01 from './images/juego1.jpg'
const game = {
    id: 1,
    image: juego01,
    title: "Resident Evil 7 - Biohazard",
    detalle:'Cronológicamente, el título se ubica más de cuatro años después de los acontecimientos de Resident Evil 6, en julio del año 2017. Ethan Winters es atraído a una plantación abandonada, en los alrededores de la ciudad de Dulvey en Luisiana, por un extraño mensaje de su esposa Mia, a la que creía muerta, dado que había estado desaparecida durante tres años. Explorando una casa aparentemente abandonada, Ethan encuentra a Mia encarcelada en el sótano y desorientada. Mientras ambos intentan escapar, Mia se mostraba muy preocupada por algún ser que los vigilaba. Y con razón, ya que poco después Mia es poseída por una fuerza desconocida y ataca a Ethan, quien se ve forzado a matarla en defensa propia. Después de recibir una llamada de una mujer desconocida llamada Zoe ofreciéndole ayuda, Ethan es sorprendido por Mia, que lo ataca de nuevo con una motosierra con la que le corta una mano. Tras luchar, él logra vencerla, pero queda inconsciente luego de ser golpeado por un hombre, que más tarde se da a conocer como Jack Baker, el padre de la familia Baker.',
    genero: "Horror - Supervivencia",
    desarrollador: "Capcom",
    lanzamiento: "Año 2017",

};
    



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(game);
            }, 2000)
        });
        getData.then(res => setData(res));
    }, []);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;