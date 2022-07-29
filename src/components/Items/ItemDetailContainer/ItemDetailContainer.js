import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import juego01 from '../../images/juego1.jpg'
import juego02 from '../../images/juego2.jpg'
import juego03 from '../../images/juego3.jpg'
import juego04 from '../../images/juego4.jpg'
import juego05 from '../../images/juego5.jpg'
import juego06 from '../../images/juego6.jpg'
import juego07 from '../../images/juego7.jpg'
import juego08 from '../../images/juego8.jpg'

const game = [
{
    id: 1,
    image: juego01,
    title: "Resident Evil 7 - Biohazard",
    detalle:'Cronológicamente, el título se ubica más de cuatro años después de los acontecimientos de Resident Evil 6, en julio del año 2017. Ethan Winters es atraído a una plantación abandonada, en los alrededores de la ciudad de Dulvey en Luisiana, por un extraño mensaje de su esposa Mia, a la que creía muerta, dado que había estado desaparecida durante tres años. Explorando una casa aparentemente abandonada, Ethan encuentra a Mia encarcelada en el sótano y desorientada. Mientras ambos intentan escapar, Mia se mostraba muy preocupada por algún ser que los vigilaba. Y con razón, ya que poco después Mia es poseída por una fuerza desconocida y ataca a Ethan, quien se ve forzado a matarla en defensa propia. Después de recibir una llamada de una mujer desconocida llamada Zoe ofreciéndole ayuda, Ethan es sorprendido por Mia, que lo ataca de nuevo con una motosierra con la que le corta una mano. Tras luchar, él logra vencerla, pero queda inconsciente luego de ser golpeado por un hombre, que más tarde se da a conocer como Jack Baker, el padre de la familia Baker.',
    genero: "Horror - Supervivencia",
    desarrollador: "Capcom",
    lanzamiento: "Año 2017",
},
{
    id:2,
    image: juego02,
    title: "Doom Eternal",
    detalle: "Doom Eternal es un videojuego de acción y disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks.​ Es el quinto título principal de la serie Doom y la secuela directa del juego estrenado en 2016.",
    genero: "Acción - Shooter.",
    desarrollador: "Id Software, Panic Button",
    lanzamiento: 2020,
},
{
    id:3,
    image: juego03,
    title: "Age of Empires IV",
    detalle: "Age of Empires IV (en español La edad de los imperios IV) es un videojuego de estrategia en tiempo real desarrollado por Relic Entertainment en asociación con Worlds Edge y publicado por Xbox Game Studios. Es la cuarta entrega de la serie Age of Empires. El juego fue lanzado el 28 de octubre de 2021 para Windows.",
    genero: "Estrategia",
    desarrollador: "Relic Entertainment - Worlds Edge",
    lanzamiento: 2021,
},
{
    id:4,
    image: juego04,
    title: "Assasin'S creed VALHALLA",
    detalle: "Assassins Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassins Creed Odyssey.",
    genero: "Aventura.",
    desarrollador: "Ubisoft",
    lanzamiento: 2020,
},
{
    id:5,
    image: juego05,
    title: "Age of Mithology Extended",
    detalle: "Age of Mythology es un videojuego de estrategia en tiempo real para computadoras personales, desarrollado por Ensemble Studios y más tarde por Skybox Labs.",
    genero: "Estrategia.",
    desarrollador: "Ensemble Studios, Skybox Labs",
    lanzamiento: 2014,
},
{
    id:6,
    image: juego06,
    title: "The Sims 4",
    detalle: "Los Sims 4 es un videojuego de simulación social y de vida, el cuarto de la serie de juegos de Los Sims, desarrollado por Maxis y publicado por Electronic Arts para Windows y macOS.",
    genero: "Simulación Social.",
    desarrollador: "Electronics Arts",
    lanzamiento: 2014,
},
{
    id:7,
    image: juego07,
    title: "Sonic Generations",
    detalle: "Sonic Generations es un videojuego de plataformas de la serie Sonic the Hedgehog. Fue producido por Sega y su lanzamiento fue el 1 de noviembre de 2011, para celebrar el vigésimo aniversario del nacimiento de Sonic.",
    genero: "Aventura.",
    desarrollador: "Sonic Team - Sega",
    lanzamiento: 2011,
},
{
    id:8,
    image: juego08,
    title: "God Of War",
    detalle: "God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4. Posteriormente, fue lanzado en Microsoft Windows el 14 de enero de 2022.",
    genero: "Acción y Aventura",
    desarrollador: "SIE Santa Monica Studio, Jetpack Interactive",
    lanzamiento: 2022,
},
];
    



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {detalleId} = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(game);
            }, 2000)
        });
        getData.then(res => setData(res.find(game => game.id === parseInt(detalleId))));
    },[]);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;