
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
 
import styles from './Inicio.module.css';
import { useVideosContext } from "../../components/Contextos/videos";

function Inicio(){ 

    const { videos } = useVideosContext();

    return(
        <>
        <Banner imagem="home"/>
        <Titulo>
            <h1>Um lugar para guardar seus videos e filmes!</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map((video) => {
                return <Card {...video} key={video.id}/>
            })}
        </section>
        </>
    )
}

export default Inicio;