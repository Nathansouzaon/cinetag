import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import styles from './Player.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect } from 'react';
import { useVideosContext } from '../../components/Contextos/videos';

function Player(){

    const { id } = useParams();
    const { video, getVideo } = useVideosContext()
    
    useEffect(() => {
        getVideo(id);
    }, [getVideo, id]);

     if(!video){
        return <NaoEncontrada/>
     }


    return(
        <>
            <Banner imagem="player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe 
            width="100%"
             height="100%" 
             src={video.link} 
             title={video.titulo}
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </section>
        </>
    )
}


export default Player;